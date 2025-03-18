document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.book-item').forEach(function(item) {
        const time = item.querySelector('.createdAt').value;
        const createdAt = new Date(time);
        const now = new Date();

        const timeDiff = now - createdAt;
        const timeDiffHrs = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        let fine = 0;
        const finePerHr = 10;

        if (timeDiffHrs > 2) {
            fine = (timeDiffHrs-1) * finePerHr;
        }

        item.querySelector('.fine').textContent = `Fine: Rs.${fine}`;
        item.querySelector('.fineValue').value = fine;
    });
    let totalFine = 0;
    document.querySelectorAll('.card-return-book-items').forEach(function(item) {
        const fineReceived = item.querySelector('.fineRec').value;
        totalFine = totalFine + parseInt(fineReceived, 10);
    });
    document.querySelector('#total-fine').textContent = `Total Fine Collected : Rs.${totalFine}`;

});