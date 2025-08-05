// Function to download VCard file
function downloadVCard() {
    // VCard content
    const vCardContent = `BEGIN:VCARD
VERSION:3.0
FN:Yossef Ahmed
N:Ahmed;Yossef;;;
ORG:ORYX Consultancies & Marketing Researches L.L.C
TEL;TYPE=CELL:+966581038939
EMAIL:info@oryx-uae.com
URL:www.oryx-uae.com
END:VCARD`;

    // Create blob with VCard content
    const blob = new Blob([vCardContent], { type: 'text/vcard' });
    
    // Create download link
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'yossef-ahmed-oryx.vcf';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up
    window.URL.revokeObjectURL(url);
    
    // Show feedback to user
    showDownloadFeedback();
}

// Function to show download feedback
function showDownloadFeedback() {
    const button = document.querySelector('.add-contact-btn');
    const originalText = button.innerHTML;
    
    // Change button text temporarily
    button.innerHTML = '<span class="btn-icon">✓</span>Contact Downloaded!';
    button.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
    
    // Reset button after 2 seconds
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = 'linear-gradient(135deg, #FFA500 0%, #FF8C00 100%)';
    }, 2000);
}

// Add smooth scrolling and entrance animations
document.addEventListener('DOMContentLoaded', function() {
    // Add entrance animation to contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 300 + (index * 100));
    });
    
    // Add entrance animation to button
    const button = document.querySelector('.add-contact-btn');
    button.style.opacity = '0';
    button.style.transform = 'translateY(20px)';
    button.style.transition = 'all 0.6s ease';
    
    setTimeout(() => {
        button.style.opacity = '1';
        button.style.transform = 'translateY(0)';
    }, 800);
});

// Add click effect to contact items (for mobile interaction)
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', function() {
        const text = this.querySelector('.contact-text').textContent;
        
        // Handle different types of contact information
        if (text.includes('@')) {
            // Email
            window.location.href = `mailto:${text}`;
        } else if (text.includes('www.') || text.includes('http')) {
            // Website
            const url = text.startsWith('http') ? text : `https://${text}`;
            window.open(url, '_blank');
        } else if (text.includes('+') || text.match(/^\d/)) {
            // Phone number
            window.location.href = `tel:${text.replace(/\s/g, '')}`;
        }
    });
    
    // Add hover effect for contact items
    item.style.cursor = 'pointer';
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
        this.style.transition = 'transform 0.2s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

