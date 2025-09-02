
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


// DOM 요소들
var accountInput = document.getElementById('accountNumber');
var resultDiv = document.getElementById('result');
var bankListDiv = document.getElementById('bankList');
var popup = document.getElementById('popup');
var popupTitle = document.getElementById('popupTitle');
var popupContent = document.getElementById('popupContent');

// 숫자만 입력 가능하도록 제한
function restrictToNumbers(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}

// 결과 표시
function displayResults(recommendations) {
    if (recommendations.length === 0) {
        resultDiv.style.display = 'block';
        bankListDiv.innerHTML = '<p class="no-match">매칭되는 은행이 없습니다. 직접 은행을 선택하세요.</p>';
        return;
    }
    
    resultDiv.style.display = 'block';
    var html = '';
    
    for (var i = 0; i < recommendations.length; i++) {
        var rec = recommendations[i];
        var bank = rec.bank;
        var lengthInfo = '길이: ' + rec.expectedLength.join(', ') + '자리';
        var matchedLengthInfo = ' (매칭: ' + rec.matchedLength + '자리)';
        
        // 길이만 매칭되는 경우와 prefix 매칭되는 경우를 다르게 표시
        if (rec.isLengthOnly) {
            var positionInfo = ' (길이만)';
            html += '<button class="bank-button length-only" onclick="showBankInfo(\'' + bank.code + '\', \'' + bank.name + '\', \'' + lengthInfo + '\', \'' + rec.startPosition + '\', \'' + rec.matchedLength + '\', \'true\')">';
            html += bank.name + positionInfo + matchedLengthInfo + '<br><small>' + lengthInfo + '</small>';
            html += '</button>';
        } else {
            var positionInfo = ' (위치: ' + rec.startPosition + '번째)';
            html += '<button class="bank-button" onclick="showBankInfo(\'' + bank.code + '\', \'' + bank.name + '\', \'' + lengthInfo + '\', \'' + rec.startPosition + '\', \'' + rec.matchedLength + '\', \'false\')">';
            html += bank.name + ' (' + rec.prefix + ')' + positionInfo + matchedLengthInfo + '<br><small>' + lengthInfo + '</small>';
            html += '</button>';
        }
    }
    
    bankListDiv.innerHTML = html;
}

// 은행 정보 팝업 표시
function showBankInfo(code, name, lengthInfo, startPosition, matchedLength, isLengthOnly) {
    popupTitle.textContent = name;
    var positionText = '';
    if (isLengthOnly === 'true') {
        positionText = '<br>매칭 방식: 길이만 매칭 (Prefix 없음)';
    } else if (startPosition !== '1') {
        positionText = '<br>Prefix 위치: ' + startPosition + '번째 자리';
    }
    var matchedLengthText = '<br>매칭된 길이: ' + matchedLength + '자리';
    popupContent.innerHTML = '은행코드: ' + code + '<br>' + lengthInfo + positionText + matchedLengthText;
    popup.style.display = 'block';
}

// 팝업 닫기
function closePopup() {
    popup.style.display = 'none';
}

// 입력 이벤트 처리
function handleInput() {

    restrictToNumbers(accountInput);
    var accountNumber = accountInput.value;
    
    if (accountNumber.length >= 3) {
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

// 팝업 외부 클릭 시 닫기
window.onclick = function(event) {
    if (event.target === popup) {
        closePopup();
    }
};

// ESC 키로 팝업 닫기
document.onkeydown = function(event) {
    if (event.keyCode === 27) {
        closePopup();
    }
};

// 페이지 로드 시 초기화
window.onload = function() {
    accountInput.focus();
};
