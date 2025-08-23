// 은행별 계좌번호 규칙 데이터 (길이별 prefix 구분)
var bankData = [
    {
        name: "국민은행",
        code: "004",
        accountRules: [
            {
                length: 13,
                prefixes: [
                    { pattern: "001", startPos: 0 },
                    { pattern: "002", startPos: 0 },
                    { pattern: "003", startPos: 0 }
                ]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "004", startPos: 0 },
                    { pattern: "005", startPos: 0 },
                    { pattern: "006", startPos: 0 },
                    { pattern: "007", startPos: 0 },
                    { pattern: "008", startPos: 0 }
                ]
            },
            {
                length: 15,
                prefixes: [
                    { pattern: "009", startPos: 0 },
                    { pattern: "010", startPos: 0 },
                    { pattern: "011", startPos: 0 }
                ]
            }
        ],
        accountType: "보통예금"
    },
    {
        name: "신한은행",
        code: "088",
        accountRules: [
            {
                length: 13,
                prefixes: [
                    { pattern: "110", startPos: 0 },
                    { pattern: "120", startPos: 0 },
                    { pattern: "130", startPos: 0 }
                ]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "140", startPos: 0 },
                    { pattern: "150", startPos: 0 },
                    { pattern: "160", startPos: 0 },
                    { pattern: "170", startPos: 0 }
                ]
            },
            {
                length: 15,
                prefixes: [
                    { pattern: "180", startPos: 0 },
                    { pattern: "190", startPos: 0 },
                    { pattern: "200", startPos: 0 }
                ]
            }
        ],
        accountType: "보통예금"
    },
    {
        name: "하나은행",
        code: "081",
        accountRules: [
            {
                length: 13,
                prefixes: [
                    { pattern: "201", startPos: 0 },
                    { pattern: "202", startPos: 0 },
                    { pattern: "203", startPos: 0 }
                ]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "204", startPos: 0 },
                    { pattern: "205", startPos: 0 },
                    { pattern: "206", startPos: 0 },
                    { pattern: "207", startPos: 0 }
                ]
            },
            {
                length: 15,
                prefixes: [
                    { pattern: "208", startPos: 0 },
                    { pattern: "209", startPos: 0 },
                    { pattern: "210", startPos: 0 }
                ]
            }
        ],
        accountType: "보통예금"
    },
    {
        name: "농협은행",
        code: "011",
        accountRules: [
            {
                length: 12,
                prefixes: [
                    { pattern: "302", startPos: 0 },
                    { pattern: "303", startPos: 0 }
                ]
            },
            {
                length: 13,
                prefixes: [
                    { pattern: "304", startPos: 0 },
                    { pattern: "305", startPos: 0 },
                    { pattern: "306", startPos: 0 }
                ]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "307", startPos: 0 },
                    { pattern: "308", startPos: 0 },
                    { pattern: "309", startPos: 0 }
                ]
            }
        ],
        accountType: "보통예금"
    },
    {
        name: "카카오뱅크",
        code: "090",
        accountRules: [
            {
                length: 12,
                prefixes: [
                    { pattern: "3333", startPos: 0 },
                    { pattern: "3334", startPos: 0 }
                ]
            },
            {
                length: 13,
                prefixes: [
                    { pattern: "3335", startPos: 0 },
                    { pattern: "3336", startPos: 0 },
                    { pattern: "3337", startPos: 0 }
                ]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "3338", startPos: 0 },
                    { pattern: "3339", startPos: 0 },
                    { pattern: "3340", startPos: 0 }
                ]
            }
        ],
        accountType: "보통예금"
    },
    {
        name: "토스뱅크",
        code: "092",
        accountRules: [
            {
                length: 12,
                prefixes: [
                    { pattern: "1000", startPos: 0 },
                    { pattern: "1001", startPos: 0 }
                ]
            },
            {
                length: 13,
                prefixes: [
                    { pattern: "1002", startPos: 0 },
                    { pattern: "1003", startPos: 0 },
                    { pattern: "1004", startPos: 0 }
                ]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "1005", startPos: 0 },
                    { pattern: "1006", startPos: 0 },
                    { pattern: "1007", startPos: 0 }
                ]
            }
        ],
        accountType: "보통예금"
    },
    {
        name: "우리은행",
        code: "020",
        accountRules: [
            {
                length: 13,
                prefixes: [
                    { pattern: "100", startPos: 0 },
                    { pattern: "101", startPos: 0 },
                    { pattern: "102", startPos: 0 }
                ]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "103", startPos: 0 },
                    { pattern: "104", startPos: 0 },
                    { pattern: "105", startPos: 0 },
                    { pattern: "106", startPos: 0 }
                ]
            },
            {
                length: 15,
                prefixes: [
                    { pattern: "107", startPos: 0 },
                    { pattern: "108", startPos: 0 },
                    { pattern: "109", startPos: 0 }
                ]
            }
        ],
        accountType: "보통예금"
    },
    {
        name: "기업은행",
        code: "003",
        accountRules: [
            {
                length: 13,
                prefixes: [
                    { pattern: "010", startPos: 0 },
                    { pattern: "011", startPos: 0 },
                    { pattern: "012", startPos: 0 }
                ]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "013", startPos: 0 },
                    { pattern: "014", startPos: 0 },
                    { pattern: "015", startPos: 0 },
                    { pattern: "016", startPos: 0 }
                ]
            },
            {
                length: 15,
                prefixes: [
                    { pattern: "017", startPos: 0 },
                    { pattern: "018", startPos: 0 },
                    { pattern: "019", startPos: 0 }
                ]
            }
        ],
        accountType: "보통예금"
    },
    {
        name: "새마을금고",
        code: "045",
        accountRules: [
            {
                length: 12,
                prefixes: [
                    { pattern: "900", startPos: 0 },
                    { pattern: "901", startPos: 0 }
                ]
            },
            {
                length: 13,
                prefixes: [
                    { pattern: "902", startPos: 0 },
                    { pattern: "903", startPos: 0 },
                    { pattern: "904", startPos: 0 }
                ]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "905", startPos: 0 },
                    { pattern: "906", startPos: 0 },
                    { pattern: "907", startPos: 0 }
                ]
            }
        ],
        accountType: "보통예금"
    },
    {
        name: "케이뱅크",
        code: "089",
        accountRules: [
            {
                length: 13,
                prefixes: [
                    { pattern: "400", startPos: 0 },
                    { pattern: "401", startPos: 0 },
                    { pattern: "402", startPos: 0 }
                ]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "403", startPos: 0 },
                    { pattern: "404", startPos: 0 },
                    { pattern: "405", startPos: 0 }
                ]
            }
        ],
        accountType: "보통예금"
    },
    {
        name: "NH농협은행",
        code: "011",
        accountRules: [
            {
                length: 12,
                prefixes: [
                    { pattern: "301", startPos: 0 },
                    { pattern: "302", startPos: 0 }
                ]
            },
            {
                length: 13,
                prefixes: [
                    { pattern: "303", startPos: 0 },
                    { pattern: "304", startPos: 0 },
                    { pattern: "305", startPos: 0 }
                ]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "306", startPos: 0 },
                    { pattern: "307", startPos: 0 },
                    { pattern: "308", startPos: 0 },
                    { pattern: "309", startPos: 0 }
                ]
            }
        ],
        accountType: "보통예금"
    },
    {
        name: "예시은행(4번째자리)",
        code: "999",
        accountRules: [
            {
                length: 14,
                prefixes: [
                    { pattern: "123", startPos: 3 },  // 4번째 자리부터 시작 (인덱스 3)
                    { pattern: "456", startPos: 3 }
                ]
            },
            {
                length: 15,
                prefixes: [
                    { pattern: "789", startPos: 3 },
                    { pattern: "012", startPos: 3 }
                ]
            }
        ],
        accountType: "보통예금"
    },
    {
        name: "길이만매칭은행",
        code: "888",
        accountRules: [
            {
                length: 13,
                prefixes: []  // prefix 없음 - 길이만 맞으면 매칭
            },
            {
                length: 14,
                prefixes: []  // prefix 없음 - 길이만 맞으면 매칭
            }
        ],
        accountType: "보통예금"
    },
    {
        name: "혼합은행",
        code: "777",
        accountRules: [
            {
                length: 13,
                prefixes: [
                    { pattern: "500", startPos: 0 },
                    { pattern: "501", startPos: 0 }
                ]
            },
            {
                length: 14,
                prefixes: []  // prefix 없음 - 길이만 맞으면 매칭
            },
            {
                length: 15,
                prefixes: [
                    { pattern: "600", startPos: 0 },
                    { pattern: "601", startPos: 0 }
                ]
            }
        ],
        accountType: "보통예금"
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

// 계좌번호로 은행 추천
function recommendBank(accountNumber) {
    if (!accountNumber || accountNumber.length < 3) {
        return [];
    }
    
    var recommendations = [];
    var accountLength = accountNumber.length;
    
    for (var i = 0; i < bankData.length; i++) {
        var bank = bankData[i];
        
        // 각 계좌 길이별 규칙 확인
        for (var k = 0; k < bank.accountRules.length; k++) {
            var rule = bank.accountRules[k];
            var ruleLength = rule.length;
            
            // 계좌번호 길이가 해당 규칙의 길이보다 짧거나 같으면 확인
            if (accountLength <= ruleLength) {
                // prefix가 없는 경우 (길이만 매칭)
                if (rule.prefixes.length === 0) {
                    // 길이별 신뢰도 계산 (prefix가 없으므로 낮은 신뢰도)
                    var lengthConfidence = accountLength === ruleLength ? 0.6 : 0.4;
                    
                    // 해당 은행의 모든 길이 정보 수집
                    var allLengths = [];
                    for (var l = 0; l < bank.accountRules.length; l++) {
                        allLengths.push(bank.accountRules[l].length);
                    }
                    
                    recommendations.push({
                        bank: bank,
                        confidence: lengthConfidence,
                        prefix: "길이만매칭",
                        startPosition: 0, // prefix가 없으므로 0
                        matchedLength: ruleLength,
                        expectedLength: allLengths,
                        isLengthOnly: true
                    });
                } else {
                    // 해당 길이의 prefix들 확인
                    for (var j = 0; j < rule.prefixes.length; j++) {
                        var prefixInfo = rule.prefixes[j];
                        var prefix = prefixInfo.pattern;
                        var startPos = prefixInfo.startPos;
                        
                        // 계좌번호가 prefix 시작 위치보다 짧으면 건너뛰기
                        if (accountLength <= startPos) {
                            continue;
                        }
                        
                        // 해당 위치에서 prefix 확인
                        var checkPos = startPos;
                        var endPos = startPos + prefix.length;
                        
                        // 계좌번호가 충분히 길고, 해당 위치에 prefix가 있는지 확인
                        if (accountLength >= endPos && accountNumber.substring(checkPos, endPos) === prefix) {
                            // 길이별 신뢰도 계산
                            var lengthConfidence = accountLength === ruleLength ? 1.0 : 0.8;
                            
                            // 위치별 신뢰도 계산 (첫 번째 자리일 때 높은 신뢰도)
                            var positionConfidence = startPos === 0 ? 1.0 : 0.9;
                            
                            // 해당 은행의 모든 길이 정보 수집
                            var allLengths = [];
                            for (var l = 0; l < bank.accountRules.length; l++) {
                                allLengths.push(bank.accountRules[l].length);
                            }
                            
                            recommendations.push({
                                bank: bank,
                                confidence: (prefix.length / accountNumber.length) * lengthConfidence * positionConfidence,
                                prefix: prefix,
                                startPosition: startPos + 1, // 1부터 시작하는 위치 표시
                                matchedLength: ruleLength,
                                expectedLength: allLengths,
                                isLengthOnly: false
                            });
                            break;
                        }
                    }
                }
            }
        }
    }
    
    // 신뢰도 순으로 정렬 (Prefix 매칭이 길이만 매칭보다 우선)
    recommendations.sort(function(a, b) {
        // Prefix 매칭이 길이만 매칭보다 우선
        if (a.isLengthOnly !== b.isLengthOnly) {
            return a.isLengthOnly ? 1 : -1; // Prefix 매칭이 먼저
        }
        // 같은 타입 내에서는 신뢰도 순
        return b.confidence - a.confidence;
    });
    
    return recommendations;
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
            var positionInfo = ' (길이만 매칭)';
            html += '<button class="bank-button length-only" onclick="showBankInfo(\'' + bank.code + '\', \'' + bank.name + '\', \'' + bank.accountType + '\', \'' + lengthInfo + '\', \'' + rec.startPosition + '\', \'' + rec.matchedLength + '\', \'true\')">';
            html += bank.name + positionInfo + matchedLengthInfo + '<br><small>' + lengthInfo + '</small>';
            html += '</button>';
        } else {
            var positionInfo = rec.startPosition === 1 ? '' : ' (위치: ' + rec.startPosition + '번째)';
            html += '<button class="bank-button" onclick="showBankInfo(\'' + bank.code + '\', \'' + bank.name + '\', \'' + bank.accountType + '\', \'' + lengthInfo + '\', \'' + rec.startPosition + '\', \'' + rec.matchedLength + '\', \'false\')">';
            html += bank.name + ' (' + rec.prefix + ')' + positionInfo + matchedLengthInfo + '<br><small>' + lengthInfo + '</small>';
            html += '</button>';
        }
    }
    
    bankListDiv.innerHTML = html;
}

// 은행 정보 팝업 표시
function showBankInfo(code, name, accountType, lengthInfo, startPosition, matchedLength, isLengthOnly) {
    popupTitle.textContent = name;
    var positionText = '';
    if (isLengthOnly === 'true') {
        positionText = '<br>매칭 방식: 길이만 매칭 (Prefix 없음)';
    } else if (startPosition !== '1') {
        positionText = '<br>Prefix 위치: ' + startPosition + '번째 자리';
    }
    var matchedLengthText = '<br>매칭된 길이: ' + matchedLength + '자리';
    popupContent.innerHTML = '은행코드: ' + code + '<br>계좌종류: ' + accountType + '<br>' + lengthInfo + positionText + matchedLengthText;
    popup.style.display = 'block';
}

// 팝업 닫기
function closePopup() {
    popup.style.display = 'none';
}

// 입력 이벤트 처리
function handleInput() {
    var accountNumber = accountInput.value;
    restrictToNumbers(accountInput);
    
    if (accountNumber.length >= 3) {
        var recommendations = recommendBank(accountNumber);
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
