document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const loginView = document.getElementById('login-view');
    const resultView = document.getElementById('result-view');
    
    const inputReg = document.getElementById('input-reg');
    const inputDob = document.getElementById('input-dob');
    
    const displayReg = document.getElementById('display-reg');
    const displayDob = document.getElementById('display-dob');
    
    const btnSubmit = document.getElementById('btn-submit');
    const btnClear = document.getElementById('btn-clear');
    const btnPrint = document.getElementById('btn-print');
    const btnReset = document.getElementById('btn-reset');

    // Submit Logic
    btnSubmit.addEventListener('click', () => {
        const regValue = inputReg.value.trim();
        const dobValue = inputDob.value.trim();

        if (!regValue || !dobValue) {
            alert('Please enter both Register Number and Date of Birth.');
            return;
        }

        // Update the result page with entered details
        displayReg.textContent = regValue;
        displayDob.textContent = dobValue;

        // Toggle Views
        loginView.style.display = 'none';
        resultView.style.display = 'block';
        
        // Scroll to top
        window.scrollTo(0, 0);
    });

    // Clear Button Logic
    btnClear.addEventListener('click', () => {
        inputReg.value = '';
        inputDob.value = '';
        inputReg.focus();
    });

    // Reset Logic (Get another result)
    btnReset.addEventListener('click', () => {
        // Clear inputs
        inputReg.value = '';
        inputDob.value = '';

        // Toggle Views
        resultView.style.display = 'none';
        loginView.style.display = 'block';
    });

    // Print Functionality
    btnPrint.addEventListener('click', () => {
        window.print();
    });

    // Simple Input Formatting for DOB
    inputDob.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 2 && value.length <= 4) {
            value = value.substring(0, 2) + '/' + value.substring(2);
        } else if (value.length > 4) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4) + '/' + value.substring(4, 8);
        }
        e.target.value = value;
    });
});
