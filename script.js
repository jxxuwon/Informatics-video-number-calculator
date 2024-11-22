function calculateResults() {
    const number = parseInt(document.getElementById("numberInput").value);
    const output = document.getElementById("output");

    if (isNaN(number)) {
        output.textContent = "유효한 번호를 입력해주세요!";
        return;
    }

    // 조건에 따른 입력값 조정
    let adjustedNumber = number;
    if (number >= 1 && number <= 7) {
        adjustedNumber = number;
    } else if (number >= 10 && number <= 14) {
        adjustedNumber = number - 2;
    } else if (number >= 16 && number <= 19) {
        adjustedNumber = number - 3;
    } else {
        output.textContent = "입력 번호는 1~7, 10~14, 16~19 범위 내에 있어야 합니다!";
        return;
    }

    // 결과 계산
    const results = [];
    for (let i = 0; i < 3; i++) {
        const value = adjustedNumber * 3 - 2 + i;
        let ban = Math.floor((value - 1) / 10) + 1; // 10의 배수일 때도 올바르게 계산
        let video = (value - 1) % 10 + 1; // 1~10 범위로 조정
        results.push(`${ban}반 ${video}번째 영상`);
    }

    output.innerHTML = `
        <a>결과:</a>
        <p>${results[0]}</p>
        <p>${results[1]}</p>
        <p>${results[2]}</p>
    `;
}

// 엔터 키 입력 감지
document.getElementById("numberInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        calculateResults();
    }
});
