// GSV Vidraçaria & Molduras - Form Handlers and UI Interactions

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                // Change burger icon to 'X' icon
                menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            } else {
                mobileMenu.classList.add('hidden');
                // Change back to burger icon
                menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            }
        });

        // Close menu when clicking any link inside mobile menu
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            });
        });
    }

    // 2. FAQ Accordion Toggle
    const faqBtns = document.querySelectorAll('.faq-btn');
    faqBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const faqItem = btn.closest('.faq-item');
            const faqAnswer = faqItem.querySelector('.faq-answer');
            const isOpened = !faqAnswer.classList.contains('hidden');

            // Close all other FAQs
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-answer').classList.add('hidden');
            });

            // Toggle clicked FAQ
            if (!isOpened) {
                faqItem.classList.add('active');
                faqAnswer.classList.remove('hidden');
            } else {
                faqItem.classList.remove('active');
                faqAnswer.classList.add('hidden');
            }
        });
    });

    // 3. Form Submission Helper
    const sendToWhatsApp = (name, neighborhood, desc) => {
        const whatsappNumber = '5511972826409';
        
        // Construct the highly persuasive, clean text message
        const messageText = `Olá, GSV Vidraçaria! Gostaria de solicitar um orçamento para o meu projeto:\n\n` +
                            `👤 *Nome:* ${name}\n` +
                            `📍 *Bairro/Cidade:* ${neighborhood}\n` +
                            `📝 *Detalhes do Pedido:* ${desc}\n\n` +
                            `_Enviado através da nossa Landing Page oficial._`;
        
        const encodedMessage = encodeURIComponent(messageText);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
        
        // Open in new tab/window
        window.open(whatsappUrl, '_blank');
    };

    // 4. Hero Lead Capturing Form Listener
    const heroForm = document.getElementById('hero-quote-form');
    if (heroForm) {
        heroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('hero-name').value.trim();
            const neighborhood = document.getElementById('hero-neighborhood').value.trim();
            const desc = document.getElementById('hero-desc').value.trim();

            if (name && neighborhood && desc) {
                sendToWhatsApp(name, neighborhood, desc);
            }
        });
    }

    // 5. Direct Quote Form Listener (Main Form near Footer)
    const directForm = document.getElementById('direct-quote-form');
    if (directForm) {
        directForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('direct-name').value.trim();
            const neighborhood = document.getElementById('direct-neighborhood').value.trim();
            const desc = document.getElementById('direct-desc').value.trim();

            if (name && neighborhood && desc) {
                sendToWhatsApp(name, neighborhood, desc);
            }
        });
    }

    // 6. Sticky Header Scroll Effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('bg-brand-black/95', 'border-zinc-800/80', 'shadow-lg');
                header.classList.remove('bg-brand-black/80');
            } else {
                header.classList.add('bg-brand-black/80');
                header.classList.remove('bg-brand-black/95', 'border-zinc-800/80', 'shadow-lg');
            }
        });
    }
});
