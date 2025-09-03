// 은행별 계좌번호 규칙 데이터 (길이별 prefix 구분)
var bankData = [
	{
        name: "신한",
        code: "088",
        accountRules: [
            {
                length: 11,
                prefixes: [
                    { pattern: "01", startPos: 3 },
                    { pattern: "02", startPos: 3 },
                    { pattern: "03", startPos: 3 },
                    { pattern: "04", startPos: 3 },
                    { pattern: "05", startPos: 3 },
                    { pattern: "06", startPos: 3 },
                    { pattern: "08", startPos: 3 },
                    { pattern: "10", startPos: 3 },
                    { pattern: "11", startPos: 3 },
                    { pattern: "12", startPos: 3 },
                    { pattern: "13", startPos: 3 },
                    { pattern: "61", startPos: 3 },
                    { pattern: "99", startPos: 3 }
                ]
            },
            {
                length: 12,
                prefixes: [
                    { pattern: "100", startPos: 0 },
                    { pattern: "101", startPos: 0 },
                    { pattern: "102", startPos: 0 },
                    { pattern: "103", startPos: 0 },
                    { pattern: "104", startPos: 0 },
                    { pattern: "105", startPos: 0 },
                    { pattern: "106", startPos: 0 },
                    { pattern: "107", startPos: 0 },
                    { pattern: "108", startPos: 0 },
                    { pattern: "109", startPos: 0 },
                    { pattern: "110", startPos: 0 },
                    { pattern: "111", startPos: 0 },
                    { pattern: "112", startPos: 0 },
                    { pattern: "113", startPos: 0 },
                    { pattern: "114", startPos: 0 },
                    { pattern: "115", startPos: 0 },
                    { pattern: "116", startPos: 0 },
                    { pattern: "117", startPos: 0 },
                    { pattern: "118", startPos: 0 },
                    { pattern: "119", startPos: 0 },
                    { pattern: "120", startPos: 0 },
                    { pattern: "121", startPos: 0 },
                    { pattern: "122", startPos: 0 },
                    { pattern: "123", startPos: 0 },
                    { pattern: "124", startPos: 0 },
                    { pattern: "125", startPos: 0 },
                    { pattern: "126", startPos: 0 },
                    { pattern: "127", startPos: 0 },
                    { pattern: "128", startPos: 0 },
                    { pattern: "129", startPos: 0 },
                    { pattern: "130", startPos: 0 },
                    { pattern: "131", startPos: 0 },
                    { pattern: "132", startPos: 0 },
                    { pattern: "133", startPos: 0 },
                    { pattern: "134", startPos: 0 },
                    { pattern: "135", startPos: 0 },
                    { pattern: "136", startPos: 0 },
                    { pattern: "137", startPos: 0 },
                    { pattern: "138", startPos: 0 },
                    { pattern: "139", startPos: 0 },
                    { pattern: "155", startPos: 0 },
                    { pattern: "156", startPos: 0 },
                    { pattern: "157", startPos: 0 },
                    { pattern: "158", startPos: 0 },
                    { pattern: "159", startPos: 0 },
                    { pattern: "160", startPos: 0 },
                    { pattern: "161", startPos: 0 }
                ]
            },			
            {
                length: 13,
                prefixes: [
                    { pattern: "81", startPos: 3 },
                    { pattern: "82", startPos: 3 }
                ]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "560", startPos: 0 },
                    { pattern: "561", startPos: 0 },
                    { pattern: "562", startPos: 0 },
                    { pattern: "563", startPos: 0 },
                    { pattern: "564", startPos: 0 },
                    { pattern: "565", startPos: 0 },
                    { pattern: "566", startPos: 0 },
                    { pattern: "567", startPos: 0 },
                    { pattern: "568", startPos: 0 },
                    { pattern: "569", startPos: 0 },
                    { pattern: "901", startPos: 0 }
                ]
            }
        ]
    },
    {
        name: "산업",
        code: "002",
        accountRules: [
            {
                length: 11,
                prefixes: [
                    { pattern: "13", startPos: 3 },
                    { pattern: "18", startPos: 3 },
                    { pattern: "20", startPos: 3 },
                    { pattern: "19", startPos: 3 }
                ]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "013", startPos: 0 },
                    { pattern: "070", startPos: 0 },
                    { pattern: "071", startPos: 0 },
                    { pattern: "072", startPos: 0 },
                    { pattern: "073", startPos: 0 },
                    { pattern: "074", startPos: 0 },
                    { pattern: "075", startPos: 0 },
                    { pattern: "076", startPos: 0 },
                    { pattern: "077", startPos: 0 },
                    { pattern: "078", startPos: 0 },
                    { pattern: "079", startPos: 0 },
                    { pattern: "080", startPos: 0 },
                    { pattern: "086", startPos: 0 },
                    { pattern: "018", startPos: 0 },
                    { pattern: "020", startPos: 0 },
                    { pattern: "010", startPos: 0 },
                    { pattern: "019", startPos: 0 }
                ]
            }
        ]
    },
    {
        name: "기업",
        code: "003",
        accountRules: [
            {
                length: 10,
                prefixes: []  // prefix 없음 - 길이만 맞으면 매칭
            },
            {
                length: 11,
                prefixes: []  // prefix 없음 - 길이만 맞으면 매칭
            },			
            {
                length: 12,
                prefixes: [
                    { pattern: "01", startPos: 3 },
                    { pattern: "02", startPos: 3 },
                    { pattern: "03", startPos: 3 },
                    { pattern: "05", startPos: 3 },
                    { pattern: "13", startPos: 3 },
                    { pattern: "93", startPos: 3 },
                    { pattern: "97", startPos: 3 }
				]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "01", startPos: 9 },
                    { pattern: "02", startPos: 9 },
                    { pattern: "03", startPos: 9 },
                    { pattern: "05", startPos: 9 },
                    { pattern: "13", startPos: 9 },
                    { pattern: "93", startPos: 9 },
                    { pattern: "97", startPos: 9 },				
                    { pattern: "07", startPos: 9 }
				]
            }
        ]
    },
    {
        name: "국민",
        code: "004",
        accountRules: [
            {
                length: 10,
                prefixes: []  // prefix 없음 - 길이만 맞으면 매칭
            },
            {
                length: 11,
                prefixes: []  // prefix 없음 - 길이만 맞으면 매칭
            },				
            {
                length: 12,
                prefixes: [
                    { pattern: "01", startPos: 3 },
                    { pattern: "26", startPos: 3 },
                    { pattern: "21", startPos: 3 },
                    { pattern: "24", startPos: 3 },
                    { pattern: "05", startPos: 3 },
                    { pattern: "06", startPos: 3 }
				]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "01", startPos: 4 },
                    { pattern: "90", startPos: 4 },
                    { pattern: "92", startPos: 4 },
                    { pattern: "02", startPos: 4 },
                    { pattern: "25", startPos: 4 }
				]
            }
        ]
    },
    {
        name: "수협",
        code: "007",
        accountRules: [
            {
                length: 11,
                prefixes: [
                    { pattern: "01", startPos: 3 },
                    { pattern: "02", startPos: 3 },
                    { pattern: "03", startPos: 3 },
	                { pattern: "06", startPos: 3 }
                ]
            },
            {
                length: 12,
                prefixes: [
                    { pattern: "101", startPos: 0 },
                    { pattern: "102", startPos: 0 },
                    { pattern: "103", startPos: 0 },
                    { pattern: "106", startPos: 0 }
                ]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "491", startPos: 0 },
                    { pattern: "492", startPos: 0 },
                    { pattern: "494", startPos: 0 },
                    { pattern: "495", startPos: 0 },
                    { pattern: "496", startPos: 0 },
                    { pattern: "497", startPos: 0 },
                    { pattern: "498", startPos: 0 },
                    { pattern: "499", startPos: 0 }
                ]
            }
        ]
    },
    {
        name: "농협",
        code: "011",
        accountRules: [
            {
                length: 11,
                prefixes: [
                    { pattern: "01", startPos: 3 },
                    { pattern: "02", startPos: 3 },
                    { pattern: "12", startPos: 3 },
                    { pattern: "06", startPos: 3 }
                ]
            },
            {
                length: 12,
                prefixes: [
                    { pattern: "01", startPos: 4 },
                    { pattern: "02", startPos: 4 },
                    { pattern: "12", startPos: 4 },
                    { pattern: "06", startPos: 4 }
                ]
            },
            {
                length: 13,
                prefixes: [
                    { pattern: "301", startPos: 0 },
                    { pattern: "302", startPos: 0 },
                    { pattern: "312", startPos: 0 },
                    { pattern: "306", startPos: 0 }
                ]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "790", startPos: 0 },
                    { pattern: "791", startPos: 0 }
                ]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "64", startPos: 6 },
                    { pattern: "65", startPos: 6 }
                ]
            }			
        ]
    },
    {
        name: "지역농축협",
        code: "012",
        accountRules: [
            {
                length: 13,
                prefixes: [
                    { pattern: "351", startPos: 0 },
                    { pattern: "352", startPos: 0 },
                    { pattern: "356", startPos: 0 }
                ]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "792", startPos: 0 }
                ]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "51", startPos: 6 },
                    { pattern: "66", startPos: 6 },
                    { pattern: "67", startPos: 6 },
                    { pattern: "52", startPos: 6 },
                    { pattern: "56", startPos: 6 }
                ]
            }
        ]
    },
    {
        name: "우리",
        code: "020",
        accountRules: [
            {
                length: 11,
                prefixes: []  // prefix 없음 - 길이만 맞으면 매칭
            },			
            {
                length: 12,
                prefixes: [
                    { pattern: "01", startPos: 3 },
                    { pattern: "09", startPos: 3 },
                    { pattern: "21", startPos: 3 },
                    { pattern: "24", startPos: 3 },
                    { pattern: "05", startPos: 3 }
                ]
            },
            {
                length: 13,
                prefixes: [
                    { pattern: "006", startPos: 1 },
                    { pattern: "007", startPos: 1 },
                    { pattern: "096", startPos: 1 },
                    { pattern: "002", startPos: 1 },
                    { pattern: "004", startPos: 1 }
                ]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "01", startPos: 9 },
                    { pattern: "15", startPos: 9 },
                    { pattern: "18", startPos: 9 },
                    { pattern: "61", startPos: 9 },
                    { pattern: "63", startPos: 9 },
                    { pattern: "64", startPos: 9 },
                    { pattern: "65", startPos: 9 },
                    { pattern: "66", startPos: 9 },
                    { pattern: "67", startPos: 9 },
                    { pattern: "02", startPos: 9 },
                    { pattern: "12", startPos: 9 },
                    { pattern: "04", startPos: 9 }					
                ]
            }
        ]
    },
    {
        name: "SC제일",
        code: "023",
        accountRules: [
            {
                length: 11,
                prefixes: [
                    { pattern: "10", startPos: 3 },
                    { pattern: "15", startPos: 3 },
                    { pattern: "76", startPos: 3 },
                    { pattern: "17", startPos: 3 },
                    { pattern: "20", startPos: 3 },
                    { pattern: "30", startPos: 3 }
                ]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "16", startPos: 3 }
                ]
            }
        ]
    },
    {
        name: "한국씨티",
        code: "027",
        accountRules: [
            {
                length: 10,
                prefixes: [
                    { pattern: "20", startPos: 2 },
                    { pattern: "21", startPos: 2 },
                    { pattern: "30", startPos: 2 },
                    { pattern: "32", startPos: 2 },
                    { pattern: "33", startPos: 2 },
                    { pattern: "34", startPos: 2 },
                    { pattern: "35", startPos: 2 },
                    { pattern: "36", startPos: 2 },
                    { pattern: "37", startPos: 2 },
                    { pattern: "38", startPos: 2 },
                    { pattern: "40", startPos: 2 },
                    { pattern: "41", startPos: 2 },
                    { pattern: "42", startPos: 2 },
                    { pattern: "43", startPos: 2 },
                    { pattern: "44", startPos: 2 },
                    { pattern: "45", startPos: 2 },
                    { pattern: "46", startPos: 2 },
                    { pattern: "48", startPos: 2 },
                    { pattern: "50", startPos: 2 },
                    { pattern: "51", startPos: 2 },
                    { pattern: "52", startPos: 2 },
                    { pattern: "53", startPos: 2 },
                    { pattern: "54", startPos: 2 },
                    { pattern: "55", startPos: 2 },
                    { pattern: "56", startPos: 2 },
                    { pattern: "57", startPos: 2 },
                    { pattern: "58", startPos: 2 },
                    { pattern: "60", startPos: 2 },
                    { pattern: "61", startPos: 2 },
                    { pattern: "62", startPos: 2 },
                    { pattern: "63", startPos: 2 },
                    { pattern: "64", startPos: 2 },
                    { pattern: "65", startPos: 2 },
                    { pattern: "66", startPos: 2 },
                    { pattern: "67", startPos: 2 },
                    { pattern: "68", startPos: 2 },
                    { pattern: "69", startPos: 2 },
                    { pattern: "70", startPos: 2 },
                    { pattern: "71", startPos: 2 },
                    { pattern: "73", startPos: 2 },
                    { pattern: "74", startPos: 2 },
                    { pattern: "75", startPos: 2 },
                    { pattern: "76", startPos: 2 },
                    { pattern: "77", startPos: 2 },
                    { pattern: "78", startPos: 2 },
                    { pattern: "80", startPos: 2 },
                    { pattern: "81", startPos: 2 },
                    { pattern: "83", startPos: 2 },
                    { pattern: "84", startPos: 2 },
                    { pattern: "85", startPos: 2 },
                    { pattern: "86", startPos: 2 },
                    { pattern: "87", startPos: 2 },
                    { pattern: "88", startPos: 2 },
                    { pattern: "91", startPos: 2 },
                    { pattern: "92", startPos: 2 },
                    { pattern: "93", startPos: 2 },
                    { pattern: "94", startPos: 2 },
                    { pattern: "95", startPos: 2 },
                    { pattern: "96", startPos: 2 },
                    { pattern: "97", startPos: 2 },
                    { pattern: "98", startPos: 2 },
                    { pattern: "99", startPos: 2 }					
                ]
            },
            {
                length: 11,
                prefixes: [
                    { pattern: "01", startPos: 8 },
                    { pattern: "05", startPos: 8 },
                    { pattern: "06", startPos: 8 },
                    { pattern: "07", startPos: 8 },
                    { pattern: "11", startPos: 8 },
                    { pattern: "15", startPos: 8 },
                    { pattern: "21", startPos: 8 },
                    { pattern: "25", startPos: 8 },
                    { pattern: "26", startPos: 8 },
                    { pattern: "27", startPos: 8 },
                    { pattern: "29", startPos: 8 },
                    { pattern: "31", startPos: 8 },
                    { pattern: "42", startPos: 8 },
                    { pattern: "51", startPos: 8 },
                    { pattern: "55", startPos: 8 },
                    { pattern: "71", startPos: 8 },
                    { pattern: "81", startPos: 8 },
                    { pattern: "91", startPos: 8 },
                    { pattern: "92", startPos: 8 },
                    { pattern: "99", startPos: 8 }
                ]
            },
            {
                length: 13,
                prefixes: [
                    { pattern: "01", startPos: 8 },
                    { pattern: "05", startPos: 8 },
                    { pattern: "06", startPos: 8 },
                    { pattern: "07", startPos: 8 },
                    { pattern: "11", startPos: 8 },
                    { pattern: "15", startPos: 8 },
                    { pattern: "21", startPos: 8 },
                    { pattern: "25", startPos: 8 },
                    { pattern: "26", startPos: 8 },
                    { pattern: "27", startPos: 8 },
                    { pattern: "29", startPos: 8 },
                    { pattern: "31", startPos: 8 },
                    { pattern: "42", startPos: 8 },
                    { pattern: "51", startPos: 8 },
                    { pattern: "55", startPos: 8 },
                    { pattern: "71", startPos: 8 },
                    { pattern: "81", startPos: 8 },
                    { pattern: "91", startPos: 8 },
                    { pattern: "92", startPos: 8 },
                    { pattern: "99", startPos: 8 }
                ]
            }
        ]
    },
    {
        name: "아이엠뱅크",
        code: "031",
        accountRules: [
            {
                length: 11,
                prefixes: []  // prefix 없음 - 길이만 맞으면 매칭
            },		
            {
                length: 12,
                prefixes: [
                    { pattern: "05", startPos: 3 },
                    { pattern: "07", startPos: 3 },
                    { pattern: "08", startPos: 3 },
                    { pattern: "02", startPos: 3 }
                ]
            },
            {
                length: 12,
                prefixes: [
                    { pattern: "505", startPos: 0 },
                    { pattern: "508", startPos: 0 },
                    { pattern: "502", startPos: 0 }
                ]
            },
            {
                length: 13,
                prefixes: [
                    { pattern: "01", startPos: 3 },
                    { pattern: "02", startPos: 3 },
                    { pattern: "11", startPos: 3 },
                    { pattern: "05", startPos: 3 }
                ]
            },
            {
                length: 13,
                prefixes: [
                    { pattern: "91", startPos: 0 },
                    { pattern: "92", startPos: 0 },
                    { pattern: "93", startPos: 0 },
                    { pattern: "94", startPos: 0 },
                    { pattern: "96", startPos: 0 },
                    { pattern: "97", startPos: 0 }
                ]
            },			
            {
                length: 14,
                prefixes: [
                    { pattern: "02", startPos: 3 },
                    { pattern: "05", startPos: 3 },
                    { pattern: "06", startPos: 3 },
                    { pattern: "07", startPos: 3 },
                    { pattern: "08", startPos: 3 },
                    { pattern: "91", startPos: 3 },
                    { pattern: "92", startPos: 3 },
                    { pattern: "93", startPos: 3 },
                    { pattern: "94", startPos: 3 },					
                    { pattern: "96", startPos: 3 }
                ]
            }
        ]
    },
    {
        name: "부산",
        code: "032",
        accountRules: [
            {
                length: 12,
                prefixes: [
                    { pattern: "01", startPos: 3 },
                    { pattern: "02", startPos: 3 },
                    { pattern: "03", startPos: 3 },
                    { pattern: "11", startPos: 3 },
                    { pattern: "12", startPos: 3 },
                    { pattern: "90", startPos: 3 },
                    { pattern: "91", startPos: 3 },
                    { pattern: "92", startPos: 3 },
                    { pattern: "93", startPos: 3 },
                    { pattern: "94", startPos: 3 },						
                    { pattern: "95", startPos: 3 }
                ]
            },		
            {
                length: 13,
                prefixes: [
                    { pattern: "101", startPos: 0 },
                    { pattern: "102", startPos: 0 },
                    { pattern: "103", startPos: 0 },
                    { pattern: "111", startPos: 0 },
                    { pattern: "112", startPos: 0 },
                    { pattern: "690", startPos: 0 },
                    { pattern: "691", startPos: 0 },
                    { pattern: "692", startPos: 0 },
                    { pattern: "693", startPos: 0 },
                    { pattern: "694", startPos: 0 },					
                    { pattern: "695", startPos: 0 }
                ]
            }
        ]
    },
    {
        name: "광주",
        code: "034",
        accountRules: [
            {
                length: 11,
                prefixes: [
                    { pattern: "02", startPos: 3 },
                    { pattern: "03", startPos: 3 },
                    { pattern: "20", startPos: 3 },
                    { pattern: "37", startPos: 3 }					
                ]
            },
            {
                length: 12,
                prefixes: [
                    { pattern: "103", startPos: 3 },
                    { pattern: "107", startPos: 3 },
                    { pattern: "108", startPos: 3 },
                    { pattern: "109", startPos: 3 },
                    { pattern: "121", startPos: 3 },
                    { pattern: "122", startPos: 3 },
                    { pattern: "123", startPos: 3 },
                    { pattern: "124", startPos: 3 }
                ]
            },
            {
                length: 13,
                prefixes: [
                    { pattern: "103", startPos: 1 },
                    { pattern: "107", startPos: 1 },
                    { pattern: "109", startPos: 1 },
                    { pattern: "121", startPos: 1 }
                ]
            }
        ]
    },
    {
        name: "제주",
        code: "035",
        accountRules: [
            {
                length: 9,
                prefixes: []  // prefix 없음 - 길이만 맞으면 매칭
            },		
	
            {
                length: 10,
                prefixes: [
                    { pattern: "01", startPos: 2 },
                    { pattern: "02", startPos: 2 },
                    { pattern: "03", startPos: 2 },
                    { pattern: "04", startPos: 2 }
                ]
            },
            {
                length: 11,
                prefixes: []  // prefix 없음 - 길이만 맞으면 매칭
            },		
            {
                length: 12,
                prefixes: [
                    { pattern: "700", startPos: 0 },
                    { pattern: "701", startPos: 0 },
                    { pattern: "702", startPos: 0 },
                    { pattern: "703", startPos: 0 },
                    { pattern: "704", startPos: 0 },
                    { pattern: "705", startPos: 0 },
                    { pattern: "706", startPos: 0 },
                    { pattern: "770", startPos: 0 },
                    { pattern: "771", startPos: 0 },
                    { pattern: "772", startPos: 0 },
                    { pattern: "773", startPos: 0 },
                    { pattern: "774", startPos: 0 },
                    { pattern: "775", startPos: 0 },
                    { pattern: "776", startPos: 0 },
                    { pattern: "777", startPos: 0 },
                    { pattern: "778", startPos: 0 },
                    { pattern: "779", startPos: 0 },
                    { pattern: "769", startPos: 0 },
                    { pattern: "711", startPos: 0 },
                    { pattern: "712", startPos: 0 }
                ]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "90", startPos: 2 },
                    { pattern: "91", startPos: 2 },
                    { pattern: "92", startPos: 2 },
                    { pattern: "93", startPos: 2 },
                    { pattern: "94", startPos: 2 },
                    { pattern: "95", startPos: 2 },
                    { pattern: "96", startPos: 2 },
                    { pattern: "97", startPos: 2 },
                    { pattern: "98", startPos: 2 },
                    { pattern: "99", startPos: 2 }
                ]
            }			
        ]
    },
    {
        name: "전북",
        code: "037",
        accountRules: [
            {
                length: 12,
                prefixes: [
                    { pattern: "13", startPos: 3 },
                    { pattern: "15", startPos: 3 },
                    { pattern: "20", startPos: 3 },
                    { pattern: "21", startPos: 3 },
                    { pattern: "22", startPos: 3 },
                    { pattern: "12", startPos: 3 },
                    { pattern: "02", startPos: 3 },
                    { pattern: "03", startPos: 3 },
                    { pattern: "35", startPos: 3 },					
                    { pattern: "37", startPos: 3 }
                ]
            },
            {
                length: 13,
                prefixes: [
                    { pattern: "013", startPos: 1 },
                    { pattern: "015", startPos: 1 },
                    { pattern: "021", startPos: 1 },
                    { pattern: "012", startPos: 1 }
                ]
            }
        ]
    },
    {
        name: "경남",
        code: "039",
        accountRules: [
            {
                length: 12,
                prefixes: [
                    { pattern: "07", startPos: 3 },
                    { pattern: "09", startPos: 3 },
                    { pattern: "17", startPos: 3 },
                    { pattern: "19", startPos: 3 },
                    { pattern: "97", startPos: 3 },
                    { pattern: "20", startPos: 3 },
                    { pattern: "21", startPos: 3 },
                    { pattern: "22", startPos: 3 },
                    { pattern: "03", startPos: 3 }
                ]
            },
            {
                length: 13,
                prefixes: [
                    { pattern: "207", startPos: 0 },
                    { pattern: "209", startPos: 0 },
                    { pattern: "220", startPos: 0 },
                    { pattern: "221", startPos: 0 },
                    { pattern: "222", startPos: 0 },
                    { pattern: "203", startPos: 0 }
                ]
            }
        ]
    },
    {
        name: "새마을",
        code: "045",
        accountRules: [
            {
                length: 13,
                prefixes: [
                    { pattern: "09", startPos: 4 },
                    { pattern: "10", startPos: 4 },
                    { pattern: "13", startPos: 4 },
                    { pattern: "37", startPos: 4 }
                ]
            },
            {
                length: 13,
                prefixes: [
                    { pattern: "002", startPos: 1 },
                    { pattern: "003", startPos: 1 },
                    { pattern: "004", startPos: 1 },
                    { pattern: "070", startPos: 1 },
                    { pattern: "072", startPos: 1 },
                    { pattern: "090", startPos: 1 },	
                    { pattern: "091", startPos: 1 },	
                    { pattern: "092", startPos: 1 },	
                    { pattern: "093", startPos: 1 },
                    { pattern: "094", startPos: 1 },	
                    { pattern: "095", startPos: 1 },	
                    { pattern: "096", startPos: 1 },	
                    { pattern: "097", startPos: 1 },	
                    { pattern: "098", startPos: 1 },	
                    { pattern: "099", startPos: 1 }					
                ]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "801", startPos: 4 },
                    { pattern: "802", startPos: 4 },
                    { pattern: "803", startPos: 4 },
                    { pattern: "804", startPos: 4 },
                    { pattern: "805", startPos: 4 },
                    { pattern: "806", startPos: 4 },	
                    { pattern: "807", startPos: 4 },	
                    { pattern: "808", startPos: 4 },	
                    { pattern: "809", startPos: 4 },
                    { pattern: "810", startPos: 4 },	
                    { pattern: "851", startPos: 4 },
                    { pattern: "852", startPos: 4 },
                    { pattern: "853", startPos: 4 },
                    { pattern: "854", startPos: 4 },
                    { pattern: "855", startPos: 4 },
                    { pattern: "856", startPos: 4 },
                    { pattern: "857", startPos: 4 },
                    { pattern: "858", startPos: 4 },
                    { pattern: "859", startPos: 4 },
                    { pattern: "860", startPos: 4 }
                ]				
            }
        ]
    },
    {
        name: "신협",
        code: "048",
        accountRules: [
            {
                length: 12,
                prefixes: [
                    { pattern: "110", startPos: 0 },
                    { pattern: "131", startPos: 0 },
                    { pattern: "132", startPos: 0 },
                    { pattern: "133", startPos: 0 },
                    { pattern: "134", startPos: 0 },
                    { pattern: "136", startPos: 0 },
                    { pattern: "137", startPos: 0 },
                    { pattern: "138", startPos: 0 },
                    { pattern: "142", startPos: 0 },
                    { pattern: "177", startPos: 0 },
                    { pattern: "180", startPos: 0 },
                    { pattern: "731", startPos: 0 },
                    { pattern: "910", startPos: 0 },	
                    { pattern: "980", startPos: 0 }
                ]
            },
            {
                length: 13,
                prefixes: [
                    { pattern: "12", startPos: 5 },
                    { pattern: "13", startPos: 5 }
                ]
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "14", startPos: 5 }
                ]				
            }
        ]
    },
    {
        name: "저축",
        code: "050",
        accountRules: [
		    {
                length: 11,
                prefixes: []  // prefix 없음 - 길이만 맞으면 매칭
            },
            {
                length: 14,
                prefixes: [
                    { pattern: "13", startPos: 5 },
                    { pattern: "15", startPos: 5 },
                    { pattern: "21", startPos: 5 },
                    { pattern: "22", startPos: 5 }
                ]
            }
        ]
    },
    {
        name: "HSBC",
        code: "054",
        accountRules: [
            {
                length: 12,
                prefixes: [
                    { pattern: "021", startPos: 9},
                    { pattern: "022", startPos: 9 },
                    { pattern: "023", startPos: 9},
                    { pattern: "024", startPos: 9 },
                    { pattern: "025", startPos: 9 },
                    { pattern: "026", startPos: 9 },
                    { pattern: "027", startPos: 9 },
                    { pattern: "028", startPos: 9 },
                    { pattern: "029", startPos: 9 },
                    { pattern: "030", startPos: 9 },
                    { pattern: "296", startPos: 9 },
                    { pattern: "297", startPos: 9 },
                    { pattern: "900", startPos: 9 },	
                    { pattern: "901", startPos: 9 },	
                    { pattern: "902", startPos: 9 },	
                    { pattern: "903", startPos: 9 },	
                    { pattern: "711", startPos: 9 },	
                    { pattern: "712", startPos: 9 },
                    { pattern: "985", startPos: 9 },
                    { pattern: "986", startPos: 9 },
                    { pattern: "987", startPos: 9 },
                    { pattern: "988", startPos: 9 },
                    { pattern: "989", startPos: 9 },
                    { pattern: "990", startPos: 9 },
                    { pattern: "991", startPos: 9 },
                    { pattern: "992", startPos: 9 },
                    { pattern: "993", startPos: 9 },
                    { pattern: "994", startPos: 9 }
                ]
            }
        ]
    },
    {
        name: "산림",
        code: "064",
        accountRules: [
            {
                length: 12,
                prefixes: [
                    { pattern: "11", startPos: 3 },
                    { pattern: "12", startPos: 3 },
                    { pattern: "13", startPos: 3 },
                    { pattern: "14", startPos: 3 }
                ]
            },
            {
                length: 13,
                prefixes: [
                    { pattern: "21", startPos: 5 },
                    { pattern: "22", startPos: 5 },
                    { pattern: "30", startPos: 5 },
                    { pattern: "27", startPos: 5 }
                ]
            }
        ]
    },
    {
        name: "우체국",
        code: "071",
        accountRules: [
            {
                length: 12,
                prefixes: [
                    { pattern: "100", startPos: 0 },
                    { pattern: "190", startPos: 0 },
                    { pattern: "530", startPos: 0 },
                    { pattern: "531", startPos: 0 },
                    { pattern: "532", startPos: 0 },
                    { pattern: "110", startPos: 0 },
                    { pattern: "120", startPos: 0 }
                ]
            },
            {
                length: 13,
                prefixes: []  // prefix 없음 - 길이만 맞으면 매칭
            },			
            {
                length: 14,
                prefixes: [
                    { pattern: "01", startPos: 6 },
                    { pattern: "02", startPos: 6 },
                    { pattern: "03", startPos: 6 },
                    { pattern: "05", startPos: 6 },
                    { pattern: "06", startPos: 6 },
                    { pattern: "31", startPos: 6 },
                    { pattern: "32", startPos: 6 },
                    { pattern: "33", startPos: 6 },
                    { pattern: "40", startPos: 6 },
                    { pattern: "41", startPos: 6 },
                    { pattern: "42", startPos: 6 },
                    { pattern: "43", startPos: 6 },
                    { pattern: "44", startPos: 6 },
                    { pattern: "45", startPos: 6 },
                    { pattern: "46", startPos: 6 },
                    { pattern: "47", startPos: 6 },
                    { pattern: "48", startPos: 6 },
                    { pattern: "49", startPos: 6 },
                    { pattern: "52", startPos: 6 },
                    { pattern: "80", startPos: 6 },
                    { pattern: "81", startPos: 6 },
                    { pattern: "82", startPos: 6 },
                    { pattern: "82", startPos: 6 },
                    { pattern: "84", startPos: 6 },
                    { pattern: "85", startPos: 6 },
                    { pattern: "86", startPos: 6 },
                    { pattern: "87", startPos: 6 },
                    { pattern: "88", startPos: 6 },
                    { pattern: "89", startPos: 6 },
                    { pattern: "97", startPos: 6 }
                ]
            }
        ]
    },
    {
        name: "하나",
        code: "081",
        accountRules: [
            {
                length: 14,
                prefixes: [
                    { pattern: "05", startPos: 12 },
                    { pattern: "37", startPos: 12 },
                    { pattern: "94", startPos: 12 },
                    { pattern: "07", startPos: 12 },
                    { pattern: "37", startPos: 12 },
                    { pattern: "08", startPos: 12 },
                    { pattern: "02", startPos: 12 }
                ]
            }
        ]
    },
    {
        name: "케이뱅크",
        code: "089",
        accountRules: [
            {
                length: 10,
                prefixes: []  // prefix 없음 - 길이만 맞으면 매칭
            },
            {
                length: 12,
                prefixes: []  // prefix 없음 - 길이만 맞으면 매칭
            },
            {
                length: 13,
                prefixes: []  // prefix 없음 - 길이만 맞으면 매칭
            },
            {
                length: 14,
                prefixes: []  // prefix 없음 - 길이만 맞으면 매칭
            }				
        ]
    },
    {
        name: "카카오",
        code: "090",
        accountRules: [
            {
                length: 13,
                prefixes: [
                    { pattern: "320", startPos: 1 },
                    { pattern: "333", startPos: 1 },
                    { pattern: "300", startPos: 1 }
                ]
            }
        ]
    },
    {
        name: "토스",
        code: "092",
        accountRules: [
            {
                length: 12,
                prefixes: [
                    { pattern: "100", startPos: 0 }
                ]
            }
        ]		
    }
];

// 계좌번호로 은행 추천
function recommendBank(accountNumber, targetBankData) {
    if (!accountNumber || accountNumber.length < 3) {
        return [];
    }

	// 대상은행목록에서 은행코드만 추출
	var targetBankCodes = {};
	if( targetBankData) {
		for( var t = 0;  t < targetBankData.length; t++) {
//			console.log(targetBankData[t].code + ":");
			targetBankCodes[targetBankData[t].code] = true;
		}
	}
	
    var recommendations = [];
    var accountLength = accountNumber.length;
    
    for (var i = 0; i < bankData.length; i++) {
        var bank = bankData[i];
		
    	if( targetBankData) {
			//  대상에 포함된 은행 목록만 처리
			if(!targetBankCodes[bank.code]){
				continue;
			}else{
				for( var t = 0;  t < targetBankData.length; t++) {
					if( bank.code === targetBankData[t].code){
						bank.name = targetBankData[t].name;
//						console.log("BANK name:"+bank.name);
					}
				}				
			}
		}
		
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
                    
                    // 해당 은행의 모든 길이 정보 수집 (중복 제거)
                    var allLengths = [];
                    var seenLengths = {};
                    for (var l = 0; l < bank.accountRules.length; l++) {
                        var length = bank.accountRules[l].length;
                        if (!seenLengths[length]) {
                            allLengths.push(length);
                            seenLengths[length] = true;
                        }
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
                            
                            // 해당 은행의 모든 길이 정보 수집 (중복 제거)
                            var allLengths = [];
                            var seenLengths = {};
                            for (var l = 0; l < bank.accountRules.length; l++) {
                                var length = bank.accountRules[l].length;
                                if (!seenLengths[length]) {
                                    allLengths.push(length);
                                    seenLengths[length] = true;
                                }
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
    
    //return recommendations;
	// 동인한 은행은 신뢰도가 가장 높은 하나만 선택
	var uniqueRecommendations = [];
	var seenBanks = {};
	
	for( var i = 0; i< recommendations.length; i++){
		var rec = recommendations[i];
		var bankCode = rec.bank.code;
		if(!seenBanks[bankCode] || rec.confidence > seenBanks[bankCode].confidence){
			if( seenBanks[bankCode]){
				for(var j =0; j<uniqueRecommendations.length; j++) {
					if(uniqueRecommendations[j].bank.code === bankCode) {
						uniqueRecommendations.splice(j, 1);
						break;
					}
				}
			}
			uniqueRecommendations.push(rec);
			seenBanks[bankCode] = rec;
		}
	}
	return uniqueRecommendations;	
}

