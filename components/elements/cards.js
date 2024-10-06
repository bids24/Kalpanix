export function applyCardStyle1() {
    const cards = document.querySelectorAll('.Kalpanix-card1');
    cards.forEach(card => {
        card.style.backgroundColor = '#f3f3f3';
        card.style.border = '1px solid #ccc';
        card.style.padding = '20px';
        card.style.borderRadius = '10px';
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        card.style.transition = 'all 0.3s ease';

        // Hover effect
        card.addEventListener('mouseover', () => {
            card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            card.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseout', () => {
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            card.style.transform = 'translateY(0)';
        });
        
        const applyMediaQueryStyles = () => {
            const smallScreen = window.matchMedia('(max-width: 600px)');
            const bigScreen = window.matchMedia('(min-width: 601px)');
            if (smallScreen.matches) {
                card.style.padding = '12px';
                card.style.width = '95vw'; // Max width to fit smaller screens
            }
            else if(bigScreen.matches){
                card.style.width = '50vw'; 
            }
        };

        applyMediaQueryStyles();
        window.addEventListener('resize', applyMediaQueryStyles);
    });
}

applyCardStyle1();
