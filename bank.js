
// 대상 은행
var bankSelectList = [
    {
        name: "국민은행",
        code: "004",
    },
    {
        name: "신한은행",
        code: "088",
    },
    {
        name: "하나은행",
        code: "081",
    },    
    {
        name: "농협은행",
        code: "011",
    },
    {
        name: "우리",
        code: "020",
    },
    {
        name: "카카오",
        code: "090",
    }
];


// 설정값들 (기본값)
var minInputLength = 3;
var maxBankRecommendations = 3;

// 설정값 저장 함수
function saveSettingsToStorage() {
    var settings = {
        minInputLength: minInputLength,
        maxBankRecommendations: maxBankRecommendations
    };
    localStorage.setItem('bankSettings', JSON.stringify(settings));
}

// 설정값 불러오기 함수
function loadSettingsFromStorage() {
    var savedSettings = localStorage.getItem('bankSettings');
    if (savedSettings) {
        try {
            var settings = JSON.parse(savedSettings);
            minInputLength = settings.minInputLength || 3;
            maxBankRecommendations = settings.maxBankRecommendations || 3;
        } catch (e) {
            console.log('설정값 불러오기 실패, 기본값 사용');
            minInputLength = 3;
            maxBankRecommendations = 3;
        }
    }
}

// DOM 요소들
var accountInput = document.getElementById('accountNumber');
var clearButton = document.getElementById('clearButton');
var resultDiv = document.getElementById('result');
var bankListDiv = document.getElementById('bankList');
var popup = document.getElementById('popup');
var popupTitle = document.getElementById('popupTitle');
var popupContent = document.getElementById('popupContent');
var settingsPopup = document.getElementById('settingsPopup');
var minInputValue = document.getElementById('minInputValue');
var maxBankValue = document.getElementById('maxBankValue');
var minInputSetting = document.getElementById('minInputSetting');
var maxBankSetting = document.getElementById('maxBankSetting');
var saveSettings = document.getElementById('saveSettings');
var cancelSettings = document.getElementById('cancelSettings');
var settingsButton = document.getElementById('settingsButton');
var helpButton = document.getElementById('helpButton');
var inputLength = document.getElementById('inputLength');
var helpPopup = document.getElementById('helpPopup');
var helpContent = document.getElementById('helpContent');

// 숫자만 입력 가능하도록 제한
function restrictToNumbers(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}

// 입력창 리셋 함수
function clearInput() {
    accountInput.value = '';
    accountInput.focus();
    resultDiv.style.display = 'none';
    updateClearButton();
    updateInputLength();
}

// X 버튼 표시/숨김 제어 함수
function updateClearButton() {
    if (accountInput.value.length > 0) {
        clearButton.style.display = 'flex';
    } else {
        clearButton.style.display = 'none';
    }
}

// 입력 길이 표시 업데이트 함수
function updateInputLength() {
    var length = accountInput.value.length;
    if (length > 0) {
        inputLength.textContent = '[' + length + '자리]';
        inputLength.style.display = 'inline';
    } else {
        inputLength.style.display = 'none';
    }
}

// 설정 팝업 열기
function openSettingsPopup() {
    minInputSetting.value = minInputLength;
    maxBankSetting.value = maxBankRecommendations;
    
    // 입력 길이 제한 이벤트 리스너 추가
    minInputSetting.oninput = function() {
        limitInputLength(this, 2);
    };
    maxBankSetting.oninput = function() {
        limitInputLength(this, 2);
    };
    
    settingsPopup.style.display = 'block';
}

// 설정 팝업 닫기
function closeSettingsPopup() {
    settingsPopup.style.display = 'none';
}

// 설정 저장
function saveSettingsValues() {
    var newMinInput = parseInt(minInputSetting.value);
    var newMaxBank = parseInt(maxBankSetting.value);
    
    if (newMinInput >= 3 && newMinInput <= 10 && newMaxBank >= 1 && newMaxBank <= 10) {
        minInputLength = newMinInput;
        maxBankRecommendations = newMaxBank;
        
        // UI 업데이트
        minInputValue.textContent = minInputLength;
        maxBankValue.textContent = maxBankRecommendations;
        
        // 설정값을 localStorage에 저장
        saveSettingsToStorage();
        
        // 설정 팝업 닫기
        closeSettingsPopup();
        
        // 계좌번호 및 결과 초기화
        accountInput.value = '';
        resultDiv.style.display = 'none';
        updateClearButton();
        updateInputLength();
        
        // 입력창에 포커스
        accountInput.focus();
    } else {
        alert('최소 3에서 10 사이의 값을 입력해주세요.');
    }
}

// 입력 필드 길이 제한 함수
function limitInputLength(input, maxLength) {
    if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);
    }
}

// 도움말 팝업 열기
function openHelpPopup() {
    // README.md 내용을 HTML로 변환하여 표시
    var helpText = getHelpContent();
    helpContent.innerHTML = helpText;
    helpPopup.style.display = 'block';
}

// 도움말 팝업 닫기
function closeHelpPopup() {
    helpPopup.style.display = 'none';
}

// 도움말 내용 가져오기
function getHelpContent() {
    return `
        <h1>계좌번호 은행 추천 프로그램</h1>
        
        <h2>주요 기능</h2>
        
        <h3>1. 실시간 은행 추천</h3>
        <ul>
            <li>계좌번호 입력 시 즉시 은행 후보를 추천</li>
            <li>은행별 계좌번호 규칙에 따른 정확한 매칭</li>
            <li>Prefix 매칭과 길이만 매칭을 구분하여 표시</li>
            <li>설정 가능한 최소 입력 길이 및 최대 추천 은행 수</li>
        </ul>
        
        <h3>2. 은행 데이터</h3>
        <ul>
            <li><strong>지원 은행</strong>: 30개 이상의 은행 및 금융기관</li>
            <li>국민은행, 신한은행, 하나은행, 농협은행, 우리은행</li>
            <li>카카오뱅크, 토스뱅크, 케이뱅크, 새마을금고</li>
            <li>기업은행, 수협은행, SC제일은행, 한국씨티은행</li>
            <li>산업은행, 부산은행, 광주은행, 제주은행 등</li>
        </ul>
        
        <h3>3. 사용자 경험</h3>
        <ul>
            <li><strong>실시간 입력 길이 표시</strong>: <code>[3자리]</code>, <code>[12자리]</code> 형태로 현재 입력 길이 표시</li>
            <li><strong>숫자만 입력 가능</strong>: 자동으로 숫자 외 문자 필터링</li>
            <li><strong>X 버튼으로 리셋</strong>: 입력창 오른쪽의 X 버튼으로 한 번에 초기화</li>
            <li><strong>은행 아이콘 표시</strong>: 각 은행 버튼에 은행 로고 아이콘 표시</li>
            <li><strong>설정 기능</strong>: 최소입력값과 최대추천은행수 사용자 정의 가능</li>
            <li><strong>설정 영구 저장</strong>: 브라우저 localStorage에 설정값 자동 저장</li>
        </ul>
        
        <h2>사용법</h2>
        
        <h3>1. 기본 사용</h3>
        <ol>
            <li>계좌번호 입력창에 숫자만 입력</li>
            <li>설정된 최소 입력 길이 이상 입력 시 실시간으로 추천 은행이 표시됨</li>
            <li>추천된 은행 버튼을 클릭하면 상세 정보 팝업 표시</li>
        </ol>
        
        <h3>2. 설정 변경</h3>
        <ol>
            <li>상단 설정 그룹에서 "설정" 버튼 클릭</li>
            <li>최소입력값 (1-10) 및 최대추천은행수 (1-10) 설정</li>
            <li>"저장" 버튼 클릭 시 설정 적용 및 계좌번호 초기화</li>
            <li>설정값은 브라우저에 자동 저장되어 다음 실행 시에도 유지</li>
        </ol>
        
        <h3>3. 입력 초기화</h3>
        <ul>
            <li><strong>X 버튼</strong>: 입력창 오른쪽의 X 버튼으로 계좌번호 및 결과 초기화</li>
            <li><strong>설정 저장 시</strong>: 자동으로 계좌번호 및 결과 초기화</li>
        </ul>
        
        <h2>테스트 예시</h2>
        
        <h3>Prefix 매칭 예시</h3>
        <ul>
            <li><code>0011234567890</code> → 국민은행 추천 (13자리, 1번째 자리)</li>
            <li><code>00412345678901</code> → 국민은행 추천 (14자리, 1번째 자리)</li>
            <li><code>1101234567890</code> → 신한은행 추천 (13자리, 1번째 자리)</li>
            <li><code>14012345678901</code> → 신한은행 추천 (14자리, 1번째 자리)</li>
        </ul>
        
        <h3>길이만 매칭 예시</h3>
        <ul>
            <li><code>1234567890123</code> → 길이만 매칭 은행 추천 (13자리)</li>
            <li><code>12345678901234</code> → 길이만 매칭 은행 추천 (14자리)</li>
        </ul>
        
        <h2>설정 옵션</h2>
        
        <h3>기본 설정값</h3>
        <ul>
            <li><strong>최소입력</strong>: 3자리 (설정 가능: 1-10자리)</li>
            <li><strong>최대추천은행</strong>: 3개 (설정 가능: 1-10개)</li>
        </ul>
        
        <h2>주의사항</h2>
        <ul>
            <li>이 프로그램은 교육 및 데모 목적으로 제작되었습니다</li>
            <li>실제 은행 계좌번호와는 다를 수 있습니다</li>
            <li>민감한 개인정보는 입력하지 마세요</li>
            <li>설정값은 브라우저별로 개별 저장됩니다</li>
        </ul>
    `;
}

// 결과 표시
function displayResults(recommendations) {
    if (recommendations.length === 0) {
        resultDiv.style.display = 'block';
        bankListDiv.innerHTML = '<p class="no-match">매칭되는 은행이 없습니다.</p>';
        return;
    }
    
    resultDiv.style.display = 'block';
    var html = '';
    var currentAccountNumber = accountInput.value; // 현재 입력된 계좌번호 가져오기
    
    // 최대 추천 은행 수 제한
    var limitedRecommendations = recommendations.slice(0, maxBankRecommendations);
    
    for (var i = 0; i < limitedRecommendations.length; i++) {
        var rec = limitedRecommendations[i];
        var bank = rec.bank;
        var lengthInfo = '가능한 길이: ' + rec.expectedLength.join(', ') + '자리';
        var matchedLengthInfo = ' (매칭: ' + rec.matchedLength + '자리)';
        
        // 길이만 매칭되는 경우와 prefix 매칭되는 경우를 다르게 표시
        if (rec.isLengthOnly) {
            html += '<button class="bank-button length-only" onclick="showBankInfo(\'' + bank.code + '\', \'' + bank.name + '\', \'' + lengthInfo + '\', \'' + rec.startPosition + '\', \'' + rec.matchedLength + '\', \'true\', \'' + currentAccountNumber + '\', \'\')">';
            html += '<img src="bank/' + bank.code + '.png" alt="' + bank.name + '" onerror="this.style.display=\'none\'" onload="console.log(\'이미지 로드 성공: \' + this.src)">';
            html += '<span class="bank-info">' + bank.name + '</span>';
            html += '</button>';
        } else {
            html += '<button class="bank-button" onclick="showBankInfo(\'' + bank.code + '\', \'' + bank.name + '\', \'' + lengthInfo + '\', \'' + rec.startPosition + '\', \'' + rec.matchedLength + '\', \'false\', \'' + currentAccountNumber + '\', \'' + rec.prefix + '\')">';
            html += '<img src="bank/' + bank.code + '.png" alt="' + bank.name + '" onerror="this.style.display=\'none\'" onload="console.log(\'이미지 로드 성공: \' + this.src)">';
            html += '<span class="bank-info">' + bank.name + '</span>';
            html += '</button>';
        }
    }
    
    // 제한된 은행 수가 표시되었음을 알리는 메시지
    if (recommendations.length > maxBankRecommendations) {
        html += '<p style="color: #6c757d; font-size: 12px; margin-top: 10px; text-align: center;">* 상위 ' + maxBankRecommendations + '개 은행만 표시됩니다.</p>';
    }
    
    bankListDiv.innerHTML = html;
}

// 은행 정보 팝업 표시
function showBankInfo(code, name, lengthInfo, startPosition, matchedLength, isLengthOnly, accountNumber, prefix) {
    // 팝업 제목에 은행 아이콘과 이름을 함께 표시
    popupTitle.innerHTML = '<img src="bank/' + code + '.png" alt="' + name + '" style="width: 24px; height: 24px; margin-right: 8px; vertical-align: middle;">' + name + ' [' + code + ']';
    var positionText = '';
    var accountNumberDisplay = '';
    
    if (accountNumber) {
        if (isLengthOnly === 'true') {
            // 길이만 매칭인 경우 - 전체 계좌번호를 일반 색상으로 표시
            accountNumberDisplay = '계좌번호: ' + accountNumber;
            positionText = '<br>매칭 방식: 길이만 매칭 (Prefix 없음)';
        } else {
            // 위치 매칭인 경우 - 매칭되는 부분을 파란색으로 강조
            var highlightedAccount = highlightMatchingDigits(accountNumber, startPosition, prefix);
            accountNumberDisplay = '계좌번호: ' + highlightedAccount;
            positionText = '<br>매칭 위치: ' + startPosition + '번째 자리';
        }
    }
    
    var matchedLengthText = '<br>매칭 길이: ' + matchedLength + '자리';
    var highlightedLengthInfo = highlightMatchingLength(lengthInfo, matchedLength);
    popupContent.innerHTML = accountNumberDisplay + positionText + matchedLengthText + '<br>' + highlightedLengthInfo;
    popup.style.display = 'block';
}

// 매칭되는 숫자를 파란색으로 강조하는 함수
function highlightMatchingDigits(accountNumber, startPosition, prefix) {
    if (!prefix || !accountNumber) {
        return accountNumber;
    }
    
    var start = parseInt(startPosition) - 1; // 0부터 시작하는 인덱스로 변환
    var end = start + prefix.length;
    
    if (start < 0 || end > accountNumber.length) {
        return accountNumber;
    }
    
    var before = accountNumber.substring(0, start);
    var matching = accountNumber.substring(start, end);
    var after = accountNumber.substring(end);
    
    return before + '<span style="color: #007bff; font-weight: bold;">' + matching + '</span>' + after;
}

// 가능한 길이 중 매칭한 길이를 빨간색으로 강조하는 함수
function highlightMatchingLength(lengthInfo, matchedLength) {
    // "가능한 길이: 11, 12, 13자리" 형태의 문자열을 처리
    var parts = lengthInfo.split(':');
    if (parts.length !== 2) {
        return lengthInfo;
    }
    
    var prefix = parts[0] + ': ';
    var lengths = parts[1].trim();
    
    // 각 길이를 분리하여 처리
    var lengthArray = lengths.split(',').map(function(length) {
        var cleanLength = length.trim().replace('자리', '');
        if (cleanLength === matchedLength.toString()) {
            return '<span style="color: #dc3545; font-weight: bold;">' + cleanLength + '자리</span>';
        } else {
            return cleanLength + '자리';
        }
    });
    
    return prefix + lengthArray.join(', ');
}

// 팝업 닫기
function closePopup() {
    popup.style.display = 'none';
}

// 입력 이벤트 처리
function handleInput() {

    restrictToNumbers(accountInput);
    var accountNumber = accountInput.value;
    
    // X 버튼 상태 업데이트
    updateClearButton();
    
    // 입력 길이 표시 업데이트
    updateInputLength();
    
    if (accountNumber.length >= minInputLength) {
        var recommendations = recommendBank(accountNumber); //, bankSelectList);
        displayResults(recommendations);
    } else {
        resultDiv.style.display = 'none';
    }
}

// 이벤트 리스너 등록
if (accountInput.addEventListener) {
    accountInput.addEventListener('input', handleInput);
    accountInput.addEventListener('keypress', function(e) {
        if (e.keyCode < 48 || e.keyCode > 57) {
            e.preventDefault();
        }
    });
} else if (accountInput.attachEvent) {
    accountInput.attachEvent('onpropertychange', handleInput);
}

// X 버튼 클릭 이벤트 리스너
if (clearButton.addEventListener) {
    clearButton.addEventListener('click', clearInput);
} else if (clearButton.attachEvent) {
    clearButton.attachEvent('onclick', clearInput);
}

// 설정 버튼 클릭 이벤트 리스너
if (settingsButton.addEventListener) {
    settingsButton.addEventListener('click', openSettingsPopup);
} else if (settingsButton.attachEvent) {
    settingsButton.attachEvent('onclick', openSettingsPopup);
}

// 도움말 버튼 클릭 이벤트 리스너
if (helpButton.addEventListener) {
    helpButton.addEventListener('click', openHelpPopup);
} else if (helpButton.attachEvent) {
    helpButton.attachEvent('onclick', openHelpPopup);
}

// 설정 저장/취소 버튼 이벤트 리스너
if (saveSettings.addEventListener) {
    saveSettings.addEventListener('click', saveSettingsValues);
} else if (saveSettings.attachEvent) {
    saveSettings.attachEvent('onclick', saveSettingsValues);
}

if (cancelSettings.addEventListener) {
    cancelSettings.addEventListener('click', closeSettingsPopup);
} else if (cancelSettings.attachEvent) {
    cancelSettings.attachEvent('onclick', closeSettingsPopup);
}

// 팝업 외부 클릭 시 닫기
window.onclick = function(event) {
    if (event.target === popup) {
        closePopup();
    }
    if (event.target === settingsPopup) {
        closeSettingsPopup();
    }
    if (event.target === helpPopup) {
        closeHelpPopup();
    }
};

// ESC 키로 팝업 닫기
document.onkeydown = function(event) {
    if (event.keyCode === 27) {
        closePopup();
        closeSettingsPopup();
    }
};

// 페이지 로드 시 초기화
window.onload = function() {
    // 저장된 설정값 불러오기
    loadSettingsFromStorage();
    
    // 설정값을 UI에 표시
    minInputValue.textContent = minInputLength;
    maxBankValue.textContent = maxBankRecommendations;
    
    // 입력 길이 표시 초기화
    updateInputLength();
    
    accountInput.focus();
};
