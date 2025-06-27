// Product data
        const products = [
            {
                id: 1,
                name: 'Tomat Cherry Organik',
                category: 'buah',
                price: 25000,
                weight: '500g',
                description: 'Segar dari Bandung',
                image: 'assets/images/tomat_cherry_organik.png',
                badge: 'Buah',
                badgeColor: 'bg-red-500'
            },
            {
                id: 2,
                name: 'Bayam Organik',
                category: 'sayur',
                price: 15000,
                weight: '250g',
                description: 'Tanpa pestisida',
                image: 'assets/images/bayam_organik.png',
                badge: 'Sayur',
                badgeColor: 'bg-orange-500'
            },
            {
                id: 3,
                name: 'Jamu Kunyit Asam',
                category: 'jamu',
                price: 35000,
                weight: '500ml',
                description: 'Resep tradisional',
                image: 'assets/images/jamu_kunyit_asam.png',
                badge: 'Jamu',
                badgeColor: 'bg-green-500'
            },
            {
                id: 4,
                name: 'Wortel Organik',
                category: 'sayur',
                price: 20000,
                weight: '1kg',
                description: 'Manis dan segar',
                image: 'assets/images/wortel_organik.png',
                badge: 'Sayur',
                badgeColor: 'bg-orange-500'
            },
            {
                id: 5,
                name: 'Apel Malang',
                category: 'buah',
                price: 45000,
                weight: '1kg',
                description: 'Renyah dan manis',
                image: 'assets/images/apel_malang.png',
                badge: 'Buah',
                badgeColor: 'bg-red-500'
            },
            {
                id: 6,
                name: 'Kangkung Organik',
                category: 'sayur',
                price: 12000,
                weight: '250g',
                description: 'Segar dari sawah',
                image: 'assets/images/kangkung_organik.png',
                badge: 'Sayur',
                badgeColor: 'bg-orange-500'
            },
            {
                id: 7,
                name: 'Jamu Beras Kencur',
                category: 'jamu',
                price: 30000,
                weight: '500ml',
                description: 'Penambah stamina',
                image: 'assets/images/jamu_beras_kencur.png',
                badge: 'Jamu',
                badgeColor: 'bg-green-500'
            },
            {
                id: 8,
                name: 'Pisang Raja',
                category: 'buah',
                price: 18000,
                weight: '1kg',
                description: 'Matang sempurna',
                image: 'assets/images/pisang_raja.png',
                badge: 'Buah',
                badgeColor: 'bg-red-500'
            }
        ];

        // Cart state
        let cart = JSON.parse(localStorage.getItem('greenHarvestCart')) || [];

        // Chatbot responses
        const chatbotResponses = {
            'halo': 'Halo! Terima kasih sudah menghubungi kami. Ada produk organik yang ingin Anda tanyakan?',
            'produk': 'Kami memiliki berbagai produk segar seperti buah, sayur, dan jamu tradisional. Semua produk kami organik dan langsung dari petani. Produk mana yang Anda cari?',
            'harga': 'Harga produk kami sangat kompetitif dan sesuai dengan kualitas organik premium. Anda bisa melihat harga di katalog atau tanyakan produk spesifik.',
            'pengiriman': 'Kami melayani pengiriman ke seluruh Indonesia dengan kemasan khusus untuk menjaga kesegaran. Estimasi pengiriman 1-3 hari kerja.',
            'organik': 'Semua produk kami 100% organik, tanpa pestisida kimia, dan sudah bersertifikat. Kami bekerja langsung dengan petani lokal yang menerapkan pertanian berkelanjutan.',
            'default': 'Terima kasih atas pertanyaan Anda. Tim kami akan membantu Anda lebih lanjut. Silakan hubungi WhatsApp kami untuk informasi detail.'
        };

        // DOM elements
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const searchInput = document.getElementById('search-input');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const productsGrid = document.getElementById('products-grid');
        const noResults = document.getElementById('no-results');
        const cartBtn = document.getElementById('cart-btn');
        const headerCartBtn = document.getElementById('header-cart-btn');
        const cartModal = document.getElementById('cart-modal');
        const closeCartModal = document.getElementById('close-cart-modal');
        const cartBadge = document.getElementById('cart-badge');
        const floatingCartBadge = document.getElementById('floating-cart-badge');
        const chatbotBtn = document.getElementById('chatbot-btn');
        const chatbotModal = document.getElementById('chatbot-modal');
        const closeChatbotModal = document.getElementById('close-chatbot-modal');
        const chatMessages = document.getElementById('chat-messages');
        const chatInput = document.getElementById('chat-input');
        const sendMessage = document.getElementById('send-message');
        const checkoutBtn = document.getElementById('checkout-btn');

        // Initialize
        let currentFilter = 'semua';
        let searchTimeout;

        // Mobile menu toggle
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Format currency
        function formatCurrency(amount) {
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0
            }).format(amount).replace('IDR', 'Rp');
        }

        // Update cart badge
        function updateCartBadge() {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            const badges = [cartBadge, floatingCartBadge];
            
            badges.forEach(badge => {
                if (totalItems > 0) {
                    badge.textContent = totalItems;
                    badge.classList.remove('hidden');
                } else {
                    badge.classList.add('hidden');
                }
            });
        }

        // Save cart to localStorage
        function saveCart() {
            localStorage.setItem('greenHarvestCart', JSON.stringify(cart));
            updateCartBadge();
        }

        // Add to cart with animation
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    ...product,
                    quantity: 1
                });
            }
            
            saveCart();
            
            // Show success feedback
            const button = document.querySelector(`[data-product-id="${productId}"]`);
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check mr-2"></i>Ditambah!';
            button.classList.add('bg-green-600');
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.classList.remove('bg-green-600');
            }, 1000);
        }

        // Remove from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            saveCart();
            renderCartItems();
        }

        // Update cart item quantity
        function updateCartQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    saveCart();
                    renderCartItems();
                }
            }
        }

        // Render cart items
        function renderCartItems() {
            const cartList = document.getElementById('cart-list');
            const emptyCart = document.getElementById('empty-cart');
            const cartFooter = document.getElementById('cart-footer');
            const cartTotal = document.getElementById('cart-total');
            
            if (cart.length === 0) {
                cartList.classList.add('hidden');
                emptyCart.classList.remove('hidden');
                cartFooter.classList.add('hidden');
                return;
            }
            
            cartList.classList.remove('hidden');
            emptyCart.classList.add('hidden');
            cartFooter.classList.remove('hidden');
            
            cartList.innerHTML = cart.map(item => `
                <div class="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                    <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-cover rounded">
                    <div class="flex-1 min-w-0">
                        <h4 class="text-sm font-medium text-gray-900 truncate">${item.name}</h4>
                        <p class="text-xs text-gray-500">${item.weight}</p>
                        <p class="text-sm font-semibold text-primary">${formatCurrency(item.price * item.quantity)}</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <button onclick="updateCartQuantity(${item.id}, -1)" class="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors" aria-label="Decrease quantity">
                            <i class="fas fa-minus text-xs"></i>
                        </button>
                        <span class="text-sm font-medium w-6 text-center">${item.quantity}</span>
                        <button onclick="updateCartQuantity(${item.id}, 1)" class="w-6 h-6 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors text-white" aria-label="Increase quantity">
                            <i class="fas fa-plus text-xs"></i>
                        </button>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700 transition-colors" aria-label="Remove item">
                        <i class="fas fa-trash text-sm"></i>
                    </button>
                </div>
            `).join('');
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = formatCurrency(total);
        }

        // Generate WhatsApp checkout message
        function generateWhatsAppMessage() {
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            let message = "Halo! Saya ingin memesan produk berikut:\n\n";
            
            cart.forEach(item => {
                message += `• ${item.name} (${item.weight})\n`;
                message += `  Qty: ${item.quantity} x ${formatCurrency(item.price)} = ${formatCurrency(item.price * item.quantity)}\n\n`;
            });
            
            message += `Total: ${formatCurrency(total)}\n\n`;
            message += "Mohon konfirmasi ketersediaan dan detail pengiriman. Terima kasih!";
            
            return encodeURIComponent(message);
        }

        // Checkout via WhatsApp
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) return;
            
            const message = generateWhatsAppMessage();
            const whatsappUrl = `https://wa.me/6281234567890?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });

        // Filter products
        function filterProducts() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            let filteredProducts = products;
            
            // Filter by category
            if (currentFilter !== 'semua') {
                filteredProducts = filteredProducts.filter(product => product.category === currentFilter);
            }
            
            // Filter by search term
            if (searchTerm) {
                filteredProducts = filteredProducts.filter(product => 
                    product.name.toLowerCase().includes(searchTerm) ||
                    product.description.toLowerCase().includes(searchTerm)
                );
            }
            
            renderProducts(filteredProducts);
        }

        // Render products
        function renderProducts(productsToRender) {
            if (productsToRender.length === 0) {
                productsGrid.classList.add('hidden');
                noResults.classList.remove('hidden');
                return;
            }
            
            productsGrid.classList.remove('hidden');
            noResults.classList.add('hidden');
            
            productsGrid.innerHTML = productsToRender.map(product => `
                <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div class="relative">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                        <div class="absolute top-3 left-3">
                            <span class="${product.badgeColor} text-white px-2 py-1 rounded-full text-xs font-medium">${product.badge}</span>
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800 mb-1">${product.name}</h3>
                        <p class="text-sm text-gray-600 mb-3">${product.weight} – ${product.description}</p>
                        <div class="flex items-center justify-between">
                            <span class="text-xl font-bold text-primary">${formatCurrency(product.price)}</span>
                            <button 
                                onclick="addToCart(${product.id})" 
                                data-product-id="${product.id}"
                                class="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 flex items-center"
                                aria-label="Add ${product.name} to cart"
                            >
                                <i class="fas fa-plus mr-2"></i>Tambah
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Search with debounce
        searchInput.addEventListener('input', () => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(filterProducts, 300);
        });

        // Category filter buttons
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state
                filterBtns.forEach(b => {
                    b.classList.remove('active', 'bg-primary', 'text-white');
                    b.classList.add('bg-white', 'text-gray-700', 'border', 'border-gray-200');
                });
                
                btn.classList.add('active', 'bg-primary', 'text-white');
                btn.classList.remove('bg-white', 'text-gray-700', 'border', 'border-gray-200');
                
                currentFilter = btn.dataset.category;
                filterProducts();
            });
        });

        // Cart modal
        [cartBtn, headerCartBtn].forEach(btn => {
            btn.addEventListener('click', () => {
                renderCartItems();
                cartModal.classList.remove('hidden');
                cartModal.classList.add('flex');
                document.body.style.overflow = 'hidden';
            });
        });

        closeCartModal.addEventListener('click', () => {
            cartModal.classList.add('hidden');
            cartModal.classList.remove('flex');
            document.body.style.overflow = 'auto';
        });

        // Chatbot modal
        chatbotBtn.addEventListener('click', () => {
            chatbotModal.classList.remove('hidden');
            chatbotModal.classList.add('flex');
            document.body.style.overflow = 'hidden';
            chatInput.focus();
        });

        closeChatbotModal.addEventListener('click', () => {
            chatbotModal.classList.add('hidden');
            chatbotModal.classList.remove('flex');
            document.body.style.overflow = 'auto';
        });

        // Chatbot functionality
        function addChatMessage(message, isUser = false) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `flex items-start space-x-2 ${isUser ? 'justify-end' : ''}`;
            
            if (isUser) {
                messageDiv.innerHTML = `
                    <div class="bg-accent text-white p-3 rounded-lg shadow-sm max-w-xs">
                        <p class="text-sm">${message}</p>
                    </div>
                    <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                        <i class="fas fa-user text-gray-600 text-xs"></i>
                    </div>
                `;
            } else {
                messageDiv.innerHTML = `
                    <div class="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <i class="fas fa-user-tie text-white text-xs"></i>
                    </div>
                    <div class="bg-white p-3 rounded-lg shadow-sm max-w-xs">
                        <p class="text-sm text-gray-800">${message}</p>
                    </div>
                `;
            }
            
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function getBotResponse(userMessage) {
            const message = userMessage.toLowerCase();
            
            if (message.includes('halo') || message.includes('hai')) {
                return chatbotResponses.halo;
            } else if (message.includes('produk') || message.includes('buah') || message.includes('sayur') || message.includes('jamu')) {
                return chatbotResponses.produk;
            } else if (message.includes('harga') || message.includes('biaya')) {
                return chatbotResponses.harga;
            } else if (message.includes('kirim') || message.includes('pengiriman') || message.includes('delivery')) {
                return chatbotResponses.pengiriman;
            } else if (message.includes('organik') || message.includes('pestisida') || message.includes('sertifikat')) {
                return chatbotResponses.organik;
            } else {
                return chatbotResponses.default;
            }
        }

        function sendChatMessage() {
            const message = chatInput.value.trim();
            if (message) {
                addChatMessage(message, true);
                chatInput.value = '';
                
                // Simulate bot response delay
                setTimeout(() => {
                    const botResponse = getBotResponse(message);
                    addChatMessage(botResponse, false);
                }, 1000);
            }
        }

        sendMessage.addEventListener('click', sendChatMessage);

        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        });

        // Close modals when clicking outside
        [cartModal, chatbotModal].forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                    modal.classList.remove('flex');
                    document.body.style.overflow = 'auto';
                }
            });
        });

        // Close modals with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                [cartModal, chatbotModal].forEach(modal => {
                    if (!modal.classList.contains('hidden')) {
                        modal.classList.add('hidden');
                        modal.classList.remove('flex');
                        document.body.style.overflow = 'auto';
                    }
                });
            }
        });

        // Initialize page
        document.addEventListener('DOMContentLoaded', () => {
            renderProducts(products);
            updateCartBadge();
        });

        // Make functions globally available
        window.addToCart = addToCart;
        window.removeFromCart = removeFromCart;
        window.updateCartQuantity = updateCartQuantity;