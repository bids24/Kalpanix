export function applyCardStyle1() {
    const cards = document.querySelectorAll('.Kalpanix-card1');
    cards.forEach(card => {
        // Base card styling with vibrant gradient background
        card.style.background = 'linear-gradient(135deg, #0f1112, #3c4042)'; // Vibrant gradient from pink to orange
        card.style.border = 'none'; // Remove border for clean look
        card.style.padding = '20px';
        card.style.borderRadius = '20px'; // Softer, rounded corners for a more modern look
        card.style.display = 'flex';
        card.style.height = '40vh';
        card.style.flexDirection = 'column';
        card.style.alignItems = 'center';
        card.style.justifyContent = 'center'; // Center content vertically
        card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)'; // Stronger shadow for a floating effect
        card.style.transition = 'all 0.4s ease-in-out';
        card.style.overflow = 'hidden'; // Prevent content overflow
        card.style.cursor = 'pointer';

        // Typography styling for title
        const titles = card.querySelectorAll('title'); // Ensure to have 'card-title' class for titles
        titles.forEach(title => {
            title.style.display = 'block';
            title.style.fontSize = '1.8rem'; // Larger, more visible font
            title.style.fontWeight = '700'; // Bold for emphasis
            title.style.color = '#ffffff'; // White font for contrast with background
            title.style.textTransform = 'uppercase'; // Capitalize titles
            title.style.letterSpacing = '1.5px'; // Add spacing between letters for better readability
            title.style.marginBottom = '1rem'; // Space between title and content
        });

        // Add content styles
        const content = card.querySelectorAll('p'); // Ensure 'card-content' class for content text
        content.forEach(text => {
            text.style.fontSize = '1rem';
            text.style.lineHeight = '1.6';
            text.style.color = '#b3b7ba'; // Light color for readability
            text.style.textAlign = 'center'; // Center text for a neat appearance
        });

        // Hover effect: Add subtle movement and a color shift
        card.addEventListener('mouseover', () => {
            card.style.boxShadow = '0 16px 30px rgba(0, 0, 0, 0.25)'; // More pronounced shadow on hover
            card.style.transform = 'translateY(-10px) scale(1.05)'; // Lift and slightly enlarge the card
            card.style.background = 'linear-gradient(45deg, #0f1112, #3c4042)'; // Shift to blue gradient on hover
        });

        card.addEventListener('mouseout', () => {
            card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
            card.style.transform = 'translateY(0) scale(1)'; // Reset transform on hover exit
            card.style.background = 'linear-gradient(135deg, #0f1112, #3c4042)'; // Reset to initial gradient
        });

        // Media query styles for responsive design
        const applyMediaQueryStyles = () => {
            const smallScreen = window.matchMedia('(max-width: 600px)');
            const bigScreen = window.matchMedia('(min-width: 601px)');
            if (smallScreen.matches) {
                card.style.padding = '15px';
                card.style.width = '90vw'; // Full-width card on small screens
                card.style.height = 'auto'; // Adjust height for smaller screens
                card.style.fontSize = '0.9rem'; // Smaller text for mobile
            } else if (bigScreen.matches) {
                card.style.width = '30vw'; // Set width for larger screens
                card.style.height = '40vh'; // Specific height on larger screens
            }
        };

        applyMediaQueryStyles();
        window.addEventListener('resize', applyMediaQueryStyles);
    });
}

applyCardStyle1();
