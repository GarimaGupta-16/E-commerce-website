   
        // Sample product data
        const products = [
            {
                id: 1,
                name: "Midnight Rose",
                price: 4999,
                category: "floral",
                description: "A captivating blend of Bulgarian rose and midnight jasmine, perfect for evening wear.",
                notes: "Top: Rose Petals, Bergamot | Heart: Jasmine, Peony | Base: Sandalwood, Musk",
                popularity: 95,
                featured: true
            },
            {
                id: 2,
                name: "Ocean Breeze",
                price: 3999,
                category: "citrus",
                description: "Fresh and invigorating with notes of sea salt and Mediterranean citrus.",
                notes: "Top: Lemon, Sea Salt | Heart: Marine Accord, Lavender | Base: Driftwood, Ambergris",
                popularity: 88,
                featured: true
            },
            {
                id: 3,
                name: "Velvet Woods",
                price: 5999,
                category: "woody",
                description: "Rich and sophisticated with deep woody notes and hints of vanilla.",
                notes: "Top: Black Pepper, Cardamom | Heart: Cedar, Sandalwood | Base: Vanilla, Amber",
                popularity: 92,
                featured: true
            },
            {
                id: 4,
                name: "Golden Sands",
                price: 5299,
                category: "oriental",
                description: "Exotic and warm with oriental spices and golden amber.",
                notes: "Top: Saffron, Orange Blossom | Heart: Rose, Oud | Base: Amber, Patchouli",
                popularity: 85,
                featured: false
            },
            {
                id: 5,
                name: "Spring Garden",
                price: 4299,
                category: "floral",
                description: "Light and fresh with blooming flowers and green leaves.",
                notes: "Top: Green Leaves, Lily of the Valley | Heart: Peony, Freesia | Base: White Musk, Cedar",
                popularity: 78,
                featured: false
            },
            {
                id: 6,
                name: "Citrus Burst",
                price: 3499,
                category: "citrus",
                description: "Energizing blend of tropical citrus fruits and fresh herbs.",
                notes: "Top: Grapefruit, Lime | Heart: Basil, Mint | Base: Vetiver, White Tea",
                popularity: 82,
                featured: false
            },
            {
                id: 7,
                name: "Dark Forest",
                price: 6499,
                category: "woody",
                description: "Deep and mysterious with pine, moss, and earthy undertones.",
                notes: "Top: Pine Needles, Juniper | Heart: Moss, Fir Balsam | Base: Oakmoss, Leather",
                popularity: 89,
                featured: false
            },
            {
                id: 8,
                name: "Spice Market",
                price: 4799,
                category: "oriental",
                description: "Warm and exotic with a blend of Eastern spices and incense.",
                notes: "Top: Cinnamon, Clove | Heart: Incense, Rose | Base: Sandalwood, Vanilla",
                popularity: 86,
                featured: false
            }
        ];

        // Shopping cart
        let cart = [];
        let currentUser = null;
        let filteredProducts = [...products];
        let userOrders = [];
        let userProfile = {};

        // Initialize the application
        document.addEventListener('DOMContentLoaded', function() {
            displayFeaturedProducts();
            displayProducts();
            updateCartBadge();
            
            // Initialize payment gateway
            selectPaymentMethod('card');
        });

        // Navigation functions
        function showSection(sectionName) {
            // Hide all sections
            document.querySelectorAll('.section-content').forEach(section => {
                section.classList.add('hidden');
            });
            
            // Show selected section
            document.getElementById(sectionName + 'Section').classList.remove('hidden');
            
            // Add fade-in animation
            document.getElementById(sectionName + 'Section').classList.add('fade-in');
        }

        // Product display functions
        function displayFeaturedProducts() {
            const featuredContainer = document.getElementById('featuredProducts');
            const featuredProducts = products.filter(product => product.featured);
            
            featuredContainer.innerHTML = featuredProducts.map(product => `
                <div class="product-card bg-slate-800/50 rounded-lg shadow-2xl overflow-hidden cursor-pointer border border-slate-700 hover:border-amber-400/50 transition-all w-full max-w-sm" onclick="showProductDetail(${product.id})">
                    <div class="bg-gradient-to-br from-slate-900 via-slate-800 to-black h-64 flex items-center justify-center relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
                        <svg width="100" height="140" viewBox="0 0 120 160" class="drop-shadow-2xl">
                            <defs>
                                <!-- Crystal Glass Gradients -->
                                <radialGradient id="crystalGlass${product.id}" cx="30%" cy="20%" r="80%">
                                    <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.9" />
                                    <stop offset="30%" style="stop-color:#f1f5f9;stop-opacity:0.8" />
                                    <stop offset="70%" style="stop-color:#e2e8f0;stop-opacity:0.7" />
                                    <stop offset="100%" style="stop-color:#cbd5e1;stop-opacity:0.6" />
                                </radialGradient>
                                
                                <!-- Premium Liquid Colors -->
                                <linearGradient id="premiumLiquid${product.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#fef3c7;stop-opacity:0.9" />
                                    <stop offset="30%" style="stop-color:#fbbf24;stop-opacity:0.85" />
                                    <stop offset="70%" style="stop-color:#f59e0b;stop-opacity:0.9" />
                                    <stop offset="100%" style="stop-color:#d97706;stop-opacity:0.95" />
                                </linearGradient>
                                
                                <!-- Luxury Metal Cap -->
                                <linearGradient id="luxuryCap${product.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#fef3c7" />
                                    <stop offset="20%" style="stop-color:#fbbf24" />
                                    <stop offset="50%" style="stop-color:#f59e0b" />
                                    <stop offset="80%" style="stop-color:#d97706" />
                                    <stop offset="100%" style="stop-color:#92400e" />
                                </linearGradient>
                                
                                <!-- Advanced Glass Effects -->
                                <filter id="luxuryGlass${product.id}" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
                                    <feOffset dx="3" dy="6" result="offset"/>
                                    <feFlood flood-color="#000000" flood-opacity="0.2"/>
                                    <feComposite in2="offset" operator="in"/>
                                    <feMerge>
                                        <feMergeNode/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                                
                                <!-- Reflection Pattern -->
                                <pattern id="glassReflection${product.id}" patternUnits="userSpaceOnUse" width="4" height="40">
                                    <rect width="2" height="40" fill="white" opacity="0.1"/>
                                </pattern>
                            </defs>
                            
                            <!-- Luxury Base Shadow -->
                            <ellipse cx="60" cy="145" rx="35" ry="12" fill="url(#premiumLiquid${product.id})" opacity="0.15"/>
                            <ellipse cx="60" cy="147" rx="28" ry="8" fill="black" opacity="0.3"/>
                            
                            <!-- Main Bottle Body - Sophisticated Shape -->
                            <path d="M40 55 Q40 48 45 48 L75 48 Q80 48 80 55 L80 125 Q80 135 70 135 L50 135 Q40 135 40 125 Z" 
                                  fill="url(#crystalGlass${product.id})" 
                                  stroke="#e2e8f0" 
                                  stroke-width="0.8" 
                                  filter="url(#luxuryGlass${product.id})"/>
                            
                            <!-- Bottle Shoulders - Elegant Curve -->
                            <path d="M40 55 Q40 45 50 42 L70 42 Q80 45 80 55" 
                                  fill="url(#crystalGlass${product.id})" 
                                  stroke="#e2e8f0" 
                                  stroke-width="0.8"/>
                            
                            <!-- Refined Neck -->
                            <rect x="52" y="28" width="16" height="20" rx="3" 
                                  fill="url(#crystalGlass${product.id})" 
                                  stroke="#e2e8f0" 
                                  stroke-width="0.8"/>
                            
                            <!-- Premium Cap Assembly -->
                            <rect x="46" y="18" width="28" height="14" rx="7" 
                                  fill="url(#luxuryCap${product.id})" 
                                  stroke="#92400e" 
                                  stroke-width="0.6"/>
                            <rect x="48" y="20" width="24" height="10" rx="5" 
                                  fill="#fbbf24" 
                                  opacity="0.9"/>
                            <rect x="50" y="22" width="20" height="6" rx="3" 
                                  fill="#fef3c7" 
                                  opacity="0.7"/>
                            
                            <!-- Luxury Perfume Liquid -->
                            <path d="M42 60 L42 122 Q42 132 50 132 L70 132 Q78 132 78 122 L78 60 Z" 
                                  fill="url(#premiumLiquid${product.id})"/>
                            
                            <!-- Liquid Surface Meniscus -->
                            <ellipse cx="60" cy="60" rx="18" ry="2" fill="#fef3c7" opacity="0.8"/>
                            
                            <!-- Crystal Glass Highlights -->
                            <path d="M42 55 Q42 50 45 50 L47 50 L47 130 Q45 130 42 127 Z" 
                                  fill="white" 
                                  opacity="0.6"/>
                            <path d="M73 55 L75 55 Q77 55 77 57 L77 65" 
                                  stroke="white" 
                                  stroke-width="3" 
                                  opacity="0.8" 
                                  fill="none"/>
                            
                            <!-- Premium Label with Embossed Details -->
                            <rect x="48" y="75" width="24" height="40" rx="4" 
                                  fill="white" 
                                  opacity="0.98" 
                                  stroke="#e5e7eb" 
                                  stroke-width="0.5"/>
                            <rect x="49" y="76" width="22" height="38" rx="3" 
                                  fill="none" 
                                  stroke="#fbbf24" 
                                  stroke-width="0.8"/>
                            
                            <!-- Luxury Brand Elements -->
                            <rect x="52" y="82" width="16" height="3" rx="1.5" fill="#1f2937"/>
                            <rect x="52" y="88" width="12" height="1.5" rx="0.75" fill="#6b7280"/>
                            <rect x="52" y="92" width="10" height="1.5" rx="0.75" fill="#6b7280"/>
                            
                            <!-- Elegant Logo Symbol -->
                            <circle cx="60" cy="102" r="6" fill="none" stroke="#fbbf24" stroke-width="1.2"/>
                            <circle cx="60" cy="102" r="3" fill="none" stroke="#fbbf24" stroke-width="0.8"/>
                            <circle cx="60" cy="102" r="1" fill="#fbbf24"/>
                            
                            <!-- Additional Brand Text -->
                            <rect x="52" y="110" width="16" height="1" rx="0.5" fill="#9ca3af"/>
                            <rect x="54" y="113" width="12" height="1" rx="0.5" fill="#9ca3af"/>
                            
                            <!-- Glass Reflection Effects -->
                            <rect x="44" y="55" width="3" height="75" rx="1.5" fill="white" opacity="0.3"/>
                            <rect x="70" y="60" width="2" height="30" rx="1" fill="white" opacity="0.4"/>
                            
                            <!-- Bottle Base Detail -->
                            <ellipse cx="60" cy="135" rx="20" ry="3" fill="url(#crystalGlass${product.id})" opacity="0.8"/>
                            
                            <!-- Atomizer Detail (if applicable) -->
                            <rect x="58" y="32" width="4" height="8" rx="2" fill="#cbd5e1" opacity="0.7"/>
                        </svg>
                    </div>
                    <div class="p-6 flex flex-col h-40">
                        <h3 class="font-playfair text-xl font-bold mb-2 text-white">${product.name}</h3>
                        <p class="text-slate-300 mb-4 flex-1 line-clamp-3">${product.description}</p>
                        <div class="flex justify-between items-center mt-auto">
                            <span class="text-2xl font-bold text-amber-400">₹${product.price.toLocaleString('en-IN')}</span>
                            <button onclick="event.stopPropagation(); addToCart(${product.id})" class="bg-amber-500 text-slate-900 px-4 py-2 rounded-md hover:bg-amber-400 transition-colors font-semibold">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function displayProducts() {
            const productsContainer = document.getElementById('productsGrid');
            
            productsContainer.innerHTML = filteredProducts.map(product => `
                <div class="product-card bg-slate-800/50 rounded-lg shadow-2xl overflow-hidden cursor-pointer border border-slate-700 hover:border-amber-400/50 transition-all w-full max-w-sm" onclick="showProductDetail(${product.id})">
                    <div class="bg-gradient-to-br from-slate-900 via-slate-800 to-black h-48 flex items-center justify-center relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
                        <svg width="70" height="100" viewBox="0 0 120 160" class="drop-shadow-xl">
                            <defs>
                                <!-- Crystal Glass Gradients -->
                                <radialGradient id="crystalGlassGrid${product.id}" cx="30%" cy="20%" r="80%">
                                    <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.9" />
                                    <stop offset="30%" style="stop-color:#f1f5f9;stop-opacity:0.8" />
                                    <stop offset="70%" style="stop-color:#e2e8f0;stop-opacity:0.7" />
                                    <stop offset="100%" style="stop-color:#cbd5e1;stop-opacity:0.6" />
                                </radialGradient>
                                
                                <!-- Premium Liquid Colors -->
                                <linearGradient id="premiumLiquidGrid${product.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#fef3c7;stop-opacity:0.9" />
                                    <stop offset="30%" style="stop-color:#fbbf24;stop-opacity:0.85" />
                                    <stop offset="70%" style="stop-color:#f59e0b;stop-opacity:0.9" />
                                    <stop offset="100%" style="stop-color:#d97706;stop-opacity:0.95" />
                                </linearGradient>
                                
                                <!-- Luxury Metal Cap -->
                                <linearGradient id="luxuryCapGrid${product.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#fef3c7" />
                                    <stop offset="20%" style="stop-color:#fbbf24" />
                                    <stop offset="50%" style="stop-color:#f59e0b" />
                                    <stop offset="80%" style="stop-color:#d97706" />
                                    <stop offset="100%" style="stop-color:#92400e" />
                                </linearGradient>
                                
                                <!-- Advanced Glass Effects -->
                                <filter id="luxuryGlassGrid${product.id}" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                                    <feOffset dx="2" dy="4" result="offset"/>
                                    <feFlood flood-color="#000000" flood-opacity="0.2"/>
                                    <feComposite in2="offset" operator="in"/>
                                    <feMerge>
                                        <feMergeNode/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            </defs>
                            
                            <!-- Luxury Base Shadow -->
                            <ellipse cx="60" cy="145" rx="28" ry="10" fill="url(#premiumLiquidGrid${product.id})" opacity="0.15"/>
                            <ellipse cx="60" cy="147" rx="22" ry="6" fill="black" opacity="0.3"/>
                            
                            <!-- Main Bottle Body - Sophisticated Shape -->
                            <path d="M40 55 Q40 48 45 48 L75 48 Q80 48 80 55 L80 125 Q80 135 70 135 L50 135 Q40 135 40 125 Z" 
                                  fill="url(#crystalGlassGrid${product.id})" 
                                  stroke="#e2e8f0" 
                                  stroke-width="0.6" 
                                  filter="url(#luxuryGlassGrid${product.id})"/>
                            
                            <!-- Bottle Shoulders - Elegant Curve -->
                            <path d="M40 55 Q40 45 50 42 L70 42 Q80 45 80 55" 
                                  fill="url(#crystalGlassGrid${product.id})" 
                                  stroke="#e2e8f0" 
                                  stroke-width="0.6"/>
                            
                            <!-- Refined Neck -->
                            <rect x="52" y="28" width="16" height="20" rx="3" 
                                  fill="url(#crystalGlassGrid${product.id})" 
                                  stroke="#e2e8f0" 
                                  stroke-width="0.6"/>
                            
                            <!-- Premium Cap Assembly -->
                            <rect x="46" y="18" width="28" height="14" rx="7" 
                                  fill="url(#luxuryCapGrid${product.id})" 
                                  stroke="#92400e" 
                                  stroke-width="0.4"/>
                            <rect x="48" y="20" width="24" height="10" rx="5" 
                                  fill="#fbbf24" 
                                  opacity="0.9"/>
                            <rect x="50" y="22" width="20" height="6" rx="3" 
                                  fill="#fef3c7" 
                                  opacity="0.7"/>
                            
                            <!-- Luxury Perfume Liquid -->
                            <path d="M42 60 L42 122 Q42 132 50 132 L70 132 Q78 132 78 122 L78 60 Z" 
                                  fill="url(#premiumLiquidGrid${product.id})"/>
                            
                            <!-- Liquid Surface Meniscus -->
                            <ellipse cx="60" cy="60" rx="18" ry="2" fill="#fef3c7" opacity="0.8"/>
                            
                            <!-- Crystal Glass Highlights -->
                            <path d="M42 55 Q42 50 45 50 L47 50 L47 130 Q45 130 42 127 Z" 
                                  fill="white" 
                                  opacity="0.5"/>
                            <path d="M73 55 L75 55 Q77 55 77 57 L77 65" 
                                  stroke="white" 
                                  stroke-width="2" 
                                  opacity="0.7" 
                                  fill="none"/>
                            
                            <!-- Premium Label with Embossed Details -->
                            <rect x="48" y="75" width="24" height="35" rx="3" 
                                  fill="white" 
                                  opacity="0.98" 
                                  stroke="#e5e7eb" 
                                  stroke-width="0.4"/>
                            <rect x="49" y="76" width="22" height="33" rx="2" 
                                  fill="none" 
                                  stroke="#fbbf24" 
                                  stroke-width="0.6"/>
                            
                            <!-- Luxury Brand Elements -->
                            <rect x="52" y="82" width="16" height="2" rx="1" fill="#1f2937"/>
                            <rect x="52" y="87" width="12" height="1" rx="0.5" fill="#6b7280"/>
                            <rect x="52" y="90" width="10" height="1" rx="0.5" fill="#6b7280"/>
                            
                            <!-- Elegant Logo Symbol -->
                            <circle cx="60" cy="98" r="4" fill="none" stroke="#fbbf24" stroke-width="0.8"/>
                            <circle cx="60" cy="98" r="2" fill="none" stroke="#fbbf24" stroke-width="0.6"/>
                            <circle cx="60" cy="98" r="0.8" fill="#fbbf24"/>
                            
                            <!-- Additional Brand Text -->
                            <rect x="52" y="104" width="16" height="0.8" rx="0.4" fill="#9ca3af"/>
                            <rect x="54" y="106" width="12" height="0.8" rx="0.4" fill="#9ca3af"/>
                            
                            <!-- Glass Reflection Effects -->
                            <rect x="44" y="55" width="2" height="60" rx="1" fill="white" opacity="0.3"/>
                            <rect x="70" y="60" width="1.5" height="25" rx="0.75" fill="white" opacity="0.4"/>
                            
                            <!-- Bottle Base Detail -->
                            <ellipse cx="60" cy="135" rx="20" ry="2" fill="url(#crystalGlassGrid${product.id})" opacity="0.8"/>
                        </svg>
                    </div>
                    <div class="p-4 flex flex-col h-32">
                        <div class="text-xs text-slate-400 uppercase tracking-wide mb-1">${product.category}</div>
                        <h3 class="font-playfair text-lg font-bold mb-2 text-white">${product.name}</h3>
                        <p class="text-slate-300 text-sm mb-3 flex-1 line-clamp-2">${product.description}</p>
                        <div class="flex justify-between items-center mt-auto">
                            <span class="text-xl font-bold text-amber-400">₹${product.price.toLocaleString('en-IN')}</span>
                            <button onclick="event.stopPropagation(); addToCart(${product.id})" class="bg-amber-500 text-slate-900 px-3 py-1 rounded-md hover:bg-amber-400 transition-colors text-sm font-semibold">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Product detail modal
        function showProductDetail(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;

            document.getElementById('modalTitle').textContent = product.name;
            document.getElementById('modalPrice').textContent = `₹${product.price.toLocaleString('en-IN')}`;
            document.getElementById('modalCategory').textContent = product.category.toUpperCase();
            document.getElementById('modalDescription').textContent = product.description;
            document.getElementById('modalNotes').textContent = product.notes;
            
            // Set the product image
            document.getElementById('modalImage').innerHTML = `
                <div class="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
                <svg width="150" height="200" viewBox="0 0 120 160" class="drop-shadow-2xl relative z-10">
                    <defs>
                        <!-- Crystal Glass Gradients -->
                        <radialGradient id="modalCrystalGlass" cx="25%" cy="15%" r="90%">
                            <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.95" />
                            <stop offset="25%" style="stop-color:#f8fafc;stop-opacity:0.9" />
                            <stop offset="60%" style="stop-color:#e2e8f0;stop-opacity:0.8" />
                            <stop offset="100%" style="stop-color:#cbd5e1;stop-opacity:0.7" />
                        </radialGradient>
                        
                        <!-- Premium Liquid Colors -->
                        <linearGradient id="modalPremiumLiquid" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#fef3c7;stop-opacity:0.95" />
                            <stop offset="25%" style="stop-color:#fbbf24;stop-opacity:0.9" />
                            <stop offset="60%" style="stop-color:#f59e0b;stop-opacity:0.92" />
                            <stop offset="100%" style="stop-color:#d97706;stop-opacity:0.98" />
                        </linearGradient>
                        
                        <!-- Luxury Metal Cap -->
                        <linearGradient id="modalLuxuryCap" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#fef3c7" />
                            <stop offset="15%" style="stop-color:#fbbf24" />
                            <stop offset="40%" style="stop-color:#f59e0b" />
                            <stop offset="70%" style="stop-color:#d97706" />
                            <stop offset="100%" style="stop-color:#92400e" />
                        </linearGradient>
                        
                        <!-- Advanced Glass Effects -->
                        <filter id="modalLuxuryGlass" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
                            <feOffset dx="4" dy="8" result="offset"/>
                            <feFlood flood-color="#000000" flood-opacity="0.25"/>
                            <feComposite in2="offset" operator="in"/>
                            <feMerge>
                                <feMergeNode/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                        
                        <!-- Inner Glow Effect -->
                        <filter id="modalInnerGlow">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                    
                    <!-- Luxury Base Shadow -->
                    <ellipse cx="60" cy="145" rx="40" ry="15" fill="url(#modalPremiumLiquid)" opacity="0.2"/>
                    <ellipse cx="60" cy="147" rx="32" ry="10" fill="black" opacity="0.4"/>
                    
                    <!-- Main Bottle Body - Ultra Sophisticated Shape -->
                    <path d="M38 55 Q38 46 46 46 L74 46 Q82 46 82 55 L82 125 Q82 138 68 138 L52 138 Q38 138 38 125 Z" 
                          fill="url(#modalCrystalGlass)" 
                          stroke="#e2e8f0" 
                          stroke-width="1" 
                          filter="url(#modalLuxuryGlass)"/>
                    
                    <!-- Bottle Shoulders - Premium Curve -->
                    <path d="M38 55 Q38 42 52 38 L68 38 Q82 42 82 55" 
                          fill="url(#modalCrystalGlass)" 
                          stroke="#e2e8f0" 
                          stroke-width="1"/>
                    
                    <!-- Refined Neck with Taper -->
                    <path d="M50 26 Q50 24 52 24 L68 24 Q70 24 70 26 L70 42 Q68 44 66 44 L54 44 Q52 44 50 42 Z" 
                          fill="url(#modalCrystalGlass)" 
                          stroke="#e2e8f0" 
                          stroke-width="1"/>
                    
                    <!-- Premium Cap Assembly - Multi-layered -->
                    <rect x="44" y="16" width="32" height="16" rx="8" 
                          fill="url(#modalLuxuryCap)" 
                          stroke="#92400e" 
                          stroke-width="0.8"/>
                    <rect x="46" y="18" width="28" height="12" rx="6" 
                          fill="#fbbf24" 
                          opacity="0.95"/>
                    <rect x="48" y="20" width="24" height="8" rx="4" 
                          fill="#fef3c7" 
                          opacity="0.8"/>
                    <rect x="50" y="22" width="20" height="4" rx="2" 
                          fill="#ffffff" 
                          opacity="0.6"/>
                    
                    <!-- Luxury Perfume Liquid with Depth -->
                    <path d="M40 62 L40 122 Q40 135 52 135 L68 135 Q80 135 80 122 L80 62 Z" 
                          fill="url(#modalPremiumLiquid)" 
                          filter="url(#modalInnerGlow)"/>
                    
                    <!-- Liquid Surface Meniscus with Reflection -->
                    <ellipse cx="60" cy="62" rx="20" ry="3" fill="#fef3c7" opacity="0.9"/>
                    <ellipse cx="60" cy="61" rx="18" ry="2" fill="#ffffff" opacity="0.4"/>
                    
                    <!-- Crystal Glass Highlights - Multiple Layers -->
                    <path d="M40 55 Q40 48 46 48 L48 48 L48 133 Q46 133 40 127 Z" 
                          fill="white" 
                          opacity="0.7"/>
                    <path d="M72 55 L76 55 Q78 55 78 57 L78 70" 
                          stroke="white" 
                          stroke-width="4" 
                          opacity="0.9" 
                          fill="none"/>
                    <path d="M44 50 L46 50 L46 80" 
                          stroke="white" 
                          stroke-width="2" 
                          opacity="0.5" 
                          fill="none"/>
                    
                    <!-- Premium Label with Ultra Embossed Details -->
                    <rect x="46" y="75" width="28" height="45" rx="5" 
                          fill="white" 
                          opacity="0.99" 
                          stroke="#e5e7eb" 
                          stroke-width="0.6"/>
                    <rect x="47" y="76" width="26" height="43" rx="4" 
                          fill="none" 
                          stroke="#fbbf24" 
                          stroke-width="1"/>
                    <rect x="48" y="77" width="24" height="41" rx="3" 
                          fill="none" 
                          stroke="#f59e0b" 
                          stroke-width="0.4" 
                          opacity="0.6"/>
                    
                    <!-- Luxury Brand Elements - Enhanced -->
                    <rect x="50" y="84" width="20" height="4" rx="2" fill="#1f2937"/>
                    <rect x="50" y="91" width="16" height="2" rx="1" fill="#6b7280"/>
                    <rect x="50" y="96" width="14" height="2" rx="1" fill="#6b7280"/>
                    
                    <!-- Elegant Logo Symbol - Multi-ring -->
                    <circle cx="60" cy="108" r="8" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
                    <circle cx="60" cy="108" r="5" fill="none" stroke="#fbbf24" stroke-width="1"/>
                    <circle cx="60" cy="108" r="2.5" fill="none" stroke="#f59e0b" stroke-width="0.8"/>
                    <circle cx="60" cy="108" r="1.2" fill="#fbbf24"/>
                    
                    <!-- Additional Brand Text Lines -->
                    <rect x="50" y="116" width="20" height="1.2" rx="0.6" fill="#9ca3af"/>
                    <rect x="52" y="119" width="16" height="1.2" rx="0.6" fill="#9ca3af"/>
                    <rect x="54" y="122" width="12" height="1" rx="0.5" fill="#d1d5db"/>
                    
                    <!-- Enhanced Glass Reflection Effects -->
                    <rect x="42" y="55" width="4" height="80" rx="2" fill="white" opacity="0.4"/>
                    <rect x="72" y="60" width="3" height="40" rx="1.5" fill="white" opacity="0.5"/>
                    <rect x="48" y="65" width="2" height="30" rx="1" fill="white" opacity="0.3"/>
                    
                    <!-- Bottle Base Detail with Depth -->
                    <ellipse cx="60" cy="138" rx="22" ry="4" fill="url(#modalCrystalGlass)" opacity="0.9"/>
                    <ellipse cx="60" cy="137" rx="20" ry="3" fill="white" opacity="0.3"/>
                    
                    <!-- Atomizer/Spray Detail -->
                    <rect x="58" y="30" width="4" height="10" rx="2" fill="#cbd5e1" opacity="0.8"/>
                    <circle cx="60" cy="28" r="2" fill="#e5e7eb" opacity="0.9"/>
                </svg>
            `;
            
            // Set up add to cart button
            document.getElementById('modalAddToCart').onclick = () => {
                addToCart(productId);
                closeModal();
            };
            
            document.getElementById('productModal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('productModal').classList.add('hidden');
        }

        // Search and filter functions
        function searchProducts() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
            );
            displayProducts();
        }

        function filterProducts() {
            const category = document.getElementById('categoryFilter').value;
            const priceRange = document.getElementById('priceFilter').value;
            const sortBy = document.getElementById('sortFilter').value;
            
            // Filter by category
            filteredProducts = category ? 
                products.filter(product => product.category === category) : 
                [...products];
            
            // Filter by price range
            if (priceRange) {
                const [min, max] = priceRange.split('-').map(p => p.replace('+', ''));
                filteredProducts = filteredProducts.filter(product => {
                    if (max) {
                        return product.price >= parseInt(min) && product.price <= parseInt(max);
                    } else {
                        return product.price >= parseInt(min);
                    }
                });
            }
            
            // Sort products
            switch (sortBy) {
                case 'price-low':
                    filteredProducts.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high':
                    filteredProducts.sort((a, b) => b.price - a.price);
                    break;
                case 'name':
                    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'popularity':
                default:
                    filteredProducts.sort((a, b) => b.popularity - a.popularity);
                    break;
            }
            
            displayProducts();
        }

        function clearFilters() {
            document.getElementById('categoryFilter').value = '';
            document.getElementById('priceFilter').value = '';
            document.getElementById('sortFilter').value = 'popularity';
            document.getElementById('searchInput').value = '';
            filteredProducts = [...products];
            displayProducts();
        }

        // Shopping cart functions
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;

            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            updateCartBadge();
            updateCartDisplay();
            
            // Show cart notification
            showCartNotification(product.name);
            
            // Add animation to cart badge
            document.getElementById('cartBadge').classList.add('cart-badge');
            setTimeout(() => {
                document.getElementById('cartBadge').classList.remove('cart-badge');
            }, 300);
        }

        // Cart notification functions
        function showCartNotification(productName) {
            const notification = document.getElementById('cartNotification');
            const title = document.getElementById('notificationTitle');
            const message = document.getElementById('notificationMessage');
            
            title.textContent = 'Item Added to Cart!';
            message.textContent = `${productName} has been added to your cart`;
            
            // Show notification
            notification.classList.remove('translate-x-full');
            notification.classList.add('translate-x-0');
            
            // Auto hide after 3 seconds
            setTimeout(() => {
                hideCartNotification();
            }, 3000);
        }

        function hideCartNotification() {
            const notification = document.getElementById('cartNotification');
            notification.classList.remove('translate-x-0');
            notification.classList.add('translate-x-full');
        }

        function addToCartFromModal() {
            const productId = parseInt(document.getElementById('modalAddToCart').onclick.toString().match(/\d+/)[0]);
            addToCart(productId);
            closeModal();
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartBadge();
            updateCartDisplay();
        }

        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    updateCartBadge();
                    updateCartDisplay();
                }
            }
        }

        function updateCartBadge() {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            document.getElementById('cartBadge').textContent = totalItems;
        }

        function updateCartDisplay() {
            const cartItemsContainer = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = `
                    <div class="text-center text-gray-500 py-8">
                        <i class="fas fa-shopping-cart text-4xl mb-4"></i>
                        <p>Your cart is empty</p>
                    </div>
                `;
                cartTotal.textContent = '₹0';
                return;
            }
            
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="flex items-center space-x-4 py-4 border-b">
                    <div class="bg-gradient-to-br from-slate-900 via-slate-800 to-black w-16 h-16 rounded flex items-center justify-center relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
                        <svg width="32" height="48" viewBox="0 0 120 160" class="drop-shadow-lg">
                            <defs>
                                <!-- Crystal Glass Gradients -->
                                <radialGradient id="cartCrystalGlass${item.id}" cx="30%" cy="20%" r="80%">
                                    <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.9" />
                                    <stop offset="30%" style="stop-color:#f1f5f9;stop-opacity:0.8" />
                                    <stop offset="70%" style="stop-color:#e2e8f0;stop-opacity:0.7" />
                                    <stop offset="100%" style="stop-color:#cbd5e1;stop-opacity:0.6" />
                                </radialGradient>
                                
                                <!-- Premium Liquid Colors -->
                                <linearGradient id="cartPremiumLiquid${item.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#fef3c7;stop-opacity:0.9" />
                                    <stop offset="30%" style="stop-color:#fbbf24;stop-opacity:0.85" />
                                    <stop offset="70%" style="stop-color:#f59e0b;stop-opacity:0.9" />
                                    <stop offset="100%" style="stop-color:#d97706;stop-opacity:0.95" />
                                </linearGradient>
                                
                                <!-- Luxury Metal Cap -->
                                <linearGradient id="cartLuxuryCap${item.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#fef3c7" />
                                    <stop offset="20%" style="stop-color:#fbbf24" />
                                    <stop offset="50%" style="stop-color:#f59e0b" />
                                    <stop offset="80%" style="stop-color:#d97706" />
                                    <stop offset="100%" style="stop-color:#92400e" />
                                </linearGradient>
                            </defs>
                            
                            <!-- Luxury Base Shadow -->
                            <ellipse cx="60" cy="145" rx="22" ry="8" fill="url(#cartPremiumLiquid${item.id})" opacity="0.15"/>
                            <ellipse cx="60" cy="147" rx="18" ry="5" fill="black" opacity="0.3"/>
                            
                            <!-- Main Bottle Body - Sophisticated Shape -->
                            <path d="M40 55 Q40 48 45 48 L75 48 Q80 48 80 55 L80 125 Q80 135 70 135 L50 135 Q40 135 40 125 Z" 
                                  fill="url(#cartCrystalGlass${item.id})" 
                                  stroke="#e2e8f0" 
                                  stroke-width="0.4"/>
                            
                            <!-- Bottle Shoulders - Elegant Curve -->
                            <path d="M40 55 Q40 45 50 42 L70 42 Q80 45 80 55" 
                                  fill="url(#cartCrystalGlass${item.id})" 
                                  stroke="#e2e8f0" 
                                  stroke-width="0.4"/>
                            
                            <!-- Refined Neck -->
                            <rect x="52" y="28" width="16" height="20" rx="3" 
                                  fill="url(#cartCrystalGlass${item.id})" 
                                  stroke="#e2e8f0" 
                                  stroke-width="0.4"/>
                            
                            <!-- Premium Cap Assembly -->
                            <rect x="46" y="18" width="28" height="14" rx="7" 
                                  fill="url(#cartLuxuryCap${item.id})" 
                                  stroke="#92400e" 
                                  stroke-width="0.3"/>
                            <rect x="48" y="20" width="24" height="10" rx="5" 
                                  fill="#fbbf24" 
                                  opacity="0.9"/>
                            <rect x="50" y="22" width="20" height="6" rx="3" 
                                  fill="#fef3c7" 
                                  opacity="0.7"/>
                            
                            <!-- Luxury Perfume Liquid -->
                            <path d="M42 60 L42 122 Q42 132 50 132 L70 132 Q78 132 78 122 L78 60 Z" 
                                  fill="url(#cartPremiumLiquid${item.id})"/>
                            
                            <!-- Liquid Surface Meniscus -->
                            <ellipse cx="60" cy="60" rx="18" ry="2" fill="#fef3c7" opacity="0.8"/>
                            
                            <!-- Crystal Glass Highlights -->
                            <path d="M42 55 Q42 50 45 50 L47 50 L47 130 Q45 130 42 127 Z" 
                                  fill="white" 
                                  opacity="0.4"/>
                            <path d="M73 55 L75 55 Q77 55 77 57 L77 65" 
                                  stroke="white" 
                                  stroke-width="1.5" 
                                  opacity="0.6" 
                                  fill="none"/>
                            
                            <!-- Premium Label -->
                            <rect x="48" y="75" width="24" height="30" rx="2" 
                                  fill="white" 
                                  opacity="0.98" 
                                  stroke="#fbbf24" 
                                  stroke-width="0.4"/>
                            
                            <!-- Brand Elements -->
                            <rect x="52" y="82" width="16" height="1.5" rx="0.75" fill="#1f2937"/>
                            <rect x="52" y="87" width="12" height="1" rx="0.5" fill="#6b7280"/>
                            <circle cx="60" cy="95" r="3" fill="none" stroke="#fbbf24" stroke-width="0.6"/>
                            <circle cx="60" cy="95" r="1" fill="#fbbf24"/>
                            
                            <!-- Glass Reflection Effects -->
                            <rect x="44" y="55" width="1.5" height="50" rx="0.75" fill="white" opacity="0.3"/>
                            
                            <!-- Bottle Base Detail -->
                            <ellipse cx="60" cy="135" rx="20" ry="2" fill="url(#cartCrystalGlass${item.id})" opacity="0.8"/>
                        </svg>
                    </div>
                    <div class="flex-1">
                        <h4 class="font-semibold">${item.name}</h4>
                        <p class="text-gray-600 text-sm">₹${item.price.toLocaleString('en-IN')}</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <button onclick="updateQuantity(${item.id}, -1)" class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
                            <i class="fas fa-minus text-xs"></i>
                        </button>
                        <span class="w-8 text-center">${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)" class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
                            <i class="fas fa-plus text-xs"></i>
                        </button>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('');
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = `₹${total.toLocaleString('en-IN')}`;
        }

        function toggleCart() {
            const cartSidebar = document.getElementById('cartSidebar');
            cartSidebar.classList.toggle('translate-x-full');
            updateCartDisplay();
        }

        // Checkout functions
        function proceedToCheckout() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            // Check if user is logged in
            if (!currentUser) {
                toggleCart(); // Close cart
                showAuthModal('Please sign in to continue with checkout');
                return;
            }
            
            toggleCart(); // Close cart
            showCheckout();
        }

        function showCheckout() {
            updateCheckoutDisplay();
            document.getElementById('checkoutModal').classList.remove('hidden');
        }

        function closeCheckout() {
            document.getElementById('checkoutModal').classList.add('hidden');
        }

        function updateCheckoutDisplay() {
            const checkoutItemsContainer = document.getElementById('checkoutItems');
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const tax = Math.round(subtotal * 0.08); // 8% tax
            const shipping = 199;
            const gateway = paymentGateways[selectedPaymentMethod];
            const processingFee = Math.round(subtotal * gateway.fees);
            const total = subtotal + tax + shipping + processingFee;
            
            checkoutItemsContainer.innerHTML = cart.map(item => `
                <div class="flex justify-between items-center">
                    <div>
                        <span class="font-medium">${item.name}</span>
                        <span class="text-slate-500 ml-2">x${item.quantity}</span>
                    </div>
                    <span>₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>
                </div>
            `).join('');
            
            document.getElementById('checkoutSubtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
            document.getElementById('checkoutTax').textContent = `₹${tax.toLocaleString('en-IN')}`;
            document.getElementById('processingFee').textContent = `₹${processingFee.toLocaleString('en-IN')}`;
            document.getElementById('checkoutTotal').textContent = `₹${total.toLocaleString('en-IN')}`;
        }

        // Payment processing modal functions
        function showPaymentProcessingModal() {
            document.getElementById('paymentProcessingModal').classList.remove('hidden');
            
            // Update icon based on payment method
            const icon = document.getElementById('processingIcon');
            switch (selectedPaymentMethod) {
                case 'card':
                    icon.className = 'fas fa-credit-card text-amber-400 text-2xl';
                    break;
                case 'paypal':
                    icon.className = 'fab fa-paypal text-blue-400 text-2xl';
                    break;
                case 'apple':
                    icon.className = 'fab fa-apple-pay text-white text-2xl';
                    break;
                case 'google':
                    icon.className = 'fab fa-google-pay text-green-400 text-2xl';
                    break;
            }
            
            // Reset progress bar
            document.getElementById('paymentProgressBar').style.width = '0%';
        }

        function hidePaymentProcessingModal() {
            document.getElementById('paymentProcessingModal').classList.add('hidden');
        }

        function updatePaymentStatus(status) {
            document.getElementById('paymentStatusText').textContent = status;
            
            // Update progress bar
            const progressBar = document.getElementById('paymentProgressBar');
            const currentWidth = parseInt(progressBar.style.width) || 0;
            const newWidth = Math.min(currentWidth + 25, 90);
            progressBar.style.width = newWidth + '%';
            
            if (status.includes('successful') || status.includes('Payment successful')) {
                progressBar.style.width = '100%';
                progressBar.classList.remove('bg-amber-400');
                progressBar.classList.add('bg-green-400');
            }
        }

        function showOrderConfirmationModal(details) {
            // Populate order items
            const orderItemsContainer = document.getElementById('confirmedOrderItems');
            orderItemsContainer.innerHTML = cart.map(item => `
                <div class="flex items-center space-x-4 bg-slate-900/30 border border-slate-600 rounded-lg p-4">
                    <div class="bg-gradient-to-br from-slate-900 via-slate-800 to-black w-16 h-16 rounded flex items-center justify-center relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
                        <svg width="32" height="48" viewBox="0 0 120 160" class="drop-shadow-lg">
                            <defs>
                                <radialGradient id="confirmCrystalGlass${item.id}" cx="30%" cy="20%" r="80%">
                                    <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.9" />
                                    <stop offset="30%" style="stop-color:#f1f5f9;stop-opacity:0.8" />
                                    <stop offset="70%" style="stop-color:#e2e8f0;stop-opacity:0.7" />
                                    <stop offset="100%" style="stop-color:#cbd5e1;stop-opacity:0.6" />
                                </radialGradient>
                                <linearGradient id="confirmPremiumLiquid${item.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#fef3c7;stop-opacity:0.9" />
                                    <stop offset="30%" style="stop-color:#fbbf24;stop-opacity:0.85" />
                                    <stop offset="70%" style="stop-color:#f59e0b;stop-opacity:0.9" />
                                    <stop offset="100%" style="stop-color:#d97706;stop-opacity:0.95" />
                                </linearGradient>
                                <linearGradient id="confirmLuxuryCap${item.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#fef3c7" />
                                    <stop offset="20%" style="stop-color:#fbbf24" />
                                    <stop offset="50%" style="stop-color:#f59e0b" />
                                    <stop offset="80%" style="stop-color:#d97706" />
                                    <stop offset="100%" style="stop-color:#92400e" />
                                </linearGradient>
                            </defs>
                            <ellipse cx="60" cy="145" rx="22" ry="8" fill="url(#confirmPremiumLiquid${item.id})" opacity="0.15"/>
                            <ellipse cx="60" cy="147" rx="18" ry="5" fill="black" opacity="0.3"/>
                            <path d="M40 55 Q40 48 45 48 L75 48 Q80 48 80 55 L80 125 Q80 135 70 135 L50 135 Q40 135 40 125 Z" 
                                  fill="url(#confirmCrystalGlass${item.id})" stroke="#e2e8f0" stroke-width="0.4"/>
                            <path d="M40 55 Q40 45 50 42 L70 42 Q80 45 80 55" 
                                  fill="url(#confirmCrystalGlass${item.id})" stroke="#e2e8f0" stroke-width="0.4"/>
                            <rect x="52" y="28" width="16" height="20" rx="3" 
                                  fill="url(#confirmCrystalGlass${item.id})" stroke="#e2e8f0" stroke-width="0.4"/>
                            <rect x="46" y="18" width="28" height="14" rx="7" 
                                  fill="url(#confirmLuxuryCap${item.id})" stroke="#92400e" stroke-width="0.3"/>
                            <rect x="48" y="20" width="24" height="10" rx="5" fill="#fbbf24" opacity="0.9"/>
                            <rect x="50" y="22" width="20" height="6" rx="3" fill="#fef3c7" opacity="0.7"/>
                            <path d="M42 60 L42 122 Q42 132 50 132 L70 132 Q78 132 78 122 L78 60 Z" 
                                  fill="url(#confirmPremiumLiquid${item.id})"/>
                            <ellipse cx="60" cy="60" rx="18" ry="2" fill="#fef3c7" opacity="0.8"/>
                            <path d="M42 55 Q42 50 45 50 L47 50 L47 130 Q45 130 42 127 Z" fill="white" opacity="0.4"/>
                            <path d="M73 55 L75 55 Q77 55 77 57 L77 65" stroke="white" stroke-width="1.5" opacity="0.6" fill="none"/>
                            <rect x="48" y="75" width="24" height="30" rx="2" fill="white" opacity="0.98" stroke="#fbbf24" stroke-width="0.4"/>
                            <rect x="52" y="82" width="16" height="1.5" rx="0.75" fill="#1f2937"/>
                            <rect x="52" y="87" width="12" height="1" rx="0.5" fill="#6b7280"/>
                            <circle cx="60" cy="95" r="3" fill="none" stroke="#fbbf24" stroke-width="0.6"/>
                            <circle cx="60" cy="95" r="1" fill="#fbbf24"/>
                            <rect x="44" y="55" width="1.5" height="50" rx="0.75" fill="white" opacity="0.3"/>
                            <ellipse cx="60" cy="135" rx="20" ry="2" fill="url(#confirmCrystalGlass${item.id})" opacity="0.8"/>
                        </svg>
                    </div>
                    <div class="flex-1">
                        <h4 class="font-semibold text-white text-lg">${item.name}</h4>
                        <p class="text-slate-400 text-sm capitalize">${item.category} • ${item.quantity} x ₹${item.price.toLocaleString('en-IN')}</p>
                        <p class="text-slate-300 text-xs mt-1">${item.description}</p>
                    </div>
                    <div class="text-right">
                        <div class="text-lg font-semibold text-amber-400">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
                        <div class="text-xs text-slate-400">Qty: ${item.quantity}</div>
                    </div>
                </div>
            `).join('');

            // Generate order ID
            const orderId = generateOrderId();
            const orderDate = new Date().toLocaleDateString('en-IN', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });

            // Calculate totals
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const tax = Math.round(subtotal * 0.08);
            const shipping = 199;
            const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

            // Populate order summary
            document.getElementById('confirmedOrderId').textContent = orderId;
            document.getElementById('confirmedOrderDate').textContent = orderDate;
            document.getElementById('confirmedItemCount').textContent = `${itemCount} item${itemCount > 1 ? 's' : ''}`;
            document.getElementById('confirmedSubtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
            document.getElementById('confirmedTax').textContent = `₹${tax.toLocaleString('en-IN')}`;
            document.getElementById('confirmedProcessingFee').textContent = `₹${details.processingFee.toLocaleString('en-IN')}`;
            document.getElementById('confirmedTotal').textContent = `₹${details.amount.toLocaleString('en-IN')}`;

            // Populate payment details
            document.getElementById('confirmedTransactionId').textContent = details.transactionId;
            document.getElementById('confirmedPaymentMethod').textContent = details.paymentMethod.charAt(0).toUpperCase() + details.paymentMethod.slice(1);
            document.getElementById('confirmedGateway').textContent = details.gateway;
            document.getElementById('confirmedBank').textContent = details.bank;

            // Populate shipping address from form
            const form = document.getElementById('checkoutForm');
            const formData = new FormData(form);
            const firstName = form.querySelector('input[type="text"]').value;
            const lastName = form.querySelectorAll('input[type="text"]')[1].value;
            const email = form.querySelector('input[type="email"]').value;
            const address = form.querySelectorAll('input[type="text"]')[2].value;
            const city = form.querySelectorAll('input[type="text"]')[3].value;
            const state = form.querySelectorAll('input[type="text"]')[4].value;
            const zip = form.querySelectorAll('input[type="text"]')[5].value;

            document.getElementById('confirmedShippingAddress').innerHTML = `
                <div class="space-y-1">
                    <div class="font-medium text-white">${firstName} ${lastName}</div>
                    <div class="text-slate-300">${address}</div>
                    <div class="text-slate-300">${city}, ${state} ${zip}</div>
                    <div class="text-slate-300">${email}</div>
                </div>
            `;

            // Store order details for later use
            window.currentOrderDetails = {
                orderId,
                orderDate,
                items: [...cart],
                subtotal,
                tax,
                shipping,
                processingFee: details.processingFee,
                total: details.amount,
                transactionId: details.transactionId,
                paymentMethod: details.paymentMethod,
                gateway: details.gateway,
                bank: details.bank,
                shippingAddress: {
                    firstName,
                    lastName,
                    email,
                    address,
                    city,
                    state,
                    zip
                }
            };

            document.getElementById('orderConfirmationModal').classList.remove('hidden');
        }

        function closeOrderConfirmation() {
            document.getElementById('orderConfirmationModal').classList.add('hidden');
            closeCheckout();
            showSection('home');
        }

        function generateOrderId() {
            const prefix = 'UAM';
            const timestamp = Date.now().toString().slice(-6);
            const random = Math.random().toString(36).substring(2, 5).toUpperCase();
            return `${prefix}${timestamp}${random}`;
        }

        function downloadOrderReceipt() {
            const order = window.currentOrderDetails;
            if (!order) return;

            const receiptText = `
UAMORE LUXURY PERFUMES
Order Confirmation Receipt

Order ID: ${order.orderId}
Order Date: ${order.orderDate}
Transaction ID: ${order.transactionId}

SHIPPING ADDRESS:
${order.shippingAddress.firstName} ${order.shippingAddress.lastName}
${order.shippingAddress.address}
${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zip}
Email: ${order.shippingAddress.email}

ITEMS ORDERED:
${order.items.map(item => 
    `${item.name} (${item.category})
    Quantity: ${item.quantity} x ₹${item.price.toLocaleString('en-IN')} = ₹${(item.price * item.quantity).toLocaleString('en-IN')}
    Description: ${item.description}
    `).join('\n')}

ORDER SUMMARY:
Subtotal: ₹${order.subtotal.toLocaleString('en-IN')}
Shipping: ₹${order.shipping.toLocaleString('en-IN')}
Tax (8%): ₹${order.tax.toLocaleString('en-IN')}
Processing Fee: ₹${order.processingFee.toLocaleString('en-IN')}
TOTAL PAID: ₹${order.total.toLocaleString('en-IN')}

PAYMENT DETAILS:
Payment Method: ${order.paymentMethod.charAt(0).toUpperCase() + order.paymentMethod.slice(1)}
Gateway: ${order.gateway}
Bank/Provider: ${order.bank}
Status: Completed

DELIVERY INFORMATION:
Expected Delivery: 3-5 business days
Tracking information will be sent via email once shipped.

Thank you for choosing Uamore Luxury Perfumes!
For support, contact us at hello@uamore.com or +1 (555) 123-4567

This is a demo receipt for testing purposes.
            `;

            const blob = new Blob([receiptText], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `Uamore_Order_${order.orderId}.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        function trackOrder() {
            const order = window.currentOrderDetails;
            if (!order) return;

            alert(`Order Tracking\n\nOrder ID: ${order.orderId}\nStatus: Processing\nExpected Delivery: 3-5 business days\n\nYou will receive tracking information via email once your order ships.\n\nThis is a demo tracking system.`);
        }

        function showPaymentError(message) {
            document.getElementById('paymentErrorText').textContent = message;
            document.getElementById('paymentErrorModal').classList.remove('hidden');
        }

        function closePaymentError() {
            document.getElementById('paymentErrorModal').classList.add('hidden');
        }

        function retryPayment() {
            closePaymentError();
            // Reset payment attempts if user wants to try a different method
            if (paymentAttempts >= maxPaymentAttempts) {
                paymentAttempts = 0;
            }
        }

        function downloadReceipt() {
            // Generate a simple receipt
            const receiptData = {
                transactionId: document.getElementById('successTransactionId').textContent,
                date: new Date().toLocaleDateString(),
                items: cart.map(item => `${item.name} x${item.quantity} - ₹${(item.price * item.quantity).toLocaleString('en-IN')}`),
                total: document.getElementById('successAmount').textContent
            };
            
            const receiptText = `
UAMORE LUXURY PERFUMES
Receipt

Transaction ID: ${receiptData.transactionId}
Date: ${receiptData.date}

Items:
${receiptData.items.join('\n')}

Total: ${receiptData.total}

Thank you for your purchase!
This is a demo receipt.
            `;
            
            const blob = new Blob([receiptText], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `Uamore_Receipt_${receiptData.transactionId}.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        // Advanced Payment Gateway System
        let selectedPaymentMethod = 'card';
        let paymentValidation = {
            cardNumber: false,
            expiryDate: false,
            cvv: false,
            cardholderName: false
        };

        // Payment processing states
        let paymentProcessing = false;
        let paymentAttempts = 0;
        const maxPaymentAttempts = 3;

        // Dummy payment gateway configurations
        const paymentGateways = {
            card: {
                name: 'UamoreSecure™ Card Gateway',
                processingTime: 3000,
                successRate: 0.95,
                fees: 0.029, // 2.9%
                supportedCards: ['visa', 'mastercard', 'amex', 'discover']
            },
            paypal: {
                name: 'PayPal Express Checkout',
                processingTime: 2000,
                successRate: 0.98,
                fees: 0.034, // 3.4%
                redirectUrl: 'https://paypal.com/checkout'
            },
            apple: {
                name: 'Apple Pay',
                processingTime: 1500,
                successRate: 0.99,
                fees: 0.025, // 2.5%
                requiresBiometric: true
            },
            google: {
                name: 'Google Pay',
                processingTime: 1800,
                successRate: 0.97,
                fees: 0.027, // 2.7%
                requiresAndroid: true
            }
        };

        // Test card numbers for demo
        const testCards = {
            '4111111111111111': { type: 'visa', result: 'success', bank: 'Chase Bank' },
            '4000000000000002': { type: 'visa', result: 'declined', reason: 'Insufficient funds' },
            '4000000000000127': { type: 'visa', result: 'fraud', reason: 'Suspected fraud' },
            '5555555555554444': { type: 'mastercard', result: 'success', bank: 'Bank of America' },
            '5200828282828210': { type: 'mastercard', result: 'declined', reason: 'Card expired' },
            '378282246310005': { type: 'amex', result: 'success', bank: 'American Express' },
            '371449635398431': { type: 'amex', result: 'declined', reason: 'Invalid CVV' }
        };

        // Payment method selection with enhanced features
        function selectPaymentMethod(method) {
            selectedPaymentMethod = method;
            
            // Update UI
            document.querySelectorAll('.payment-method').forEach(btn => {
                btn.classList.remove('border-amber-400', 'bg-amber-500/10');
                btn.classList.add('border-slate-600');
                btn.querySelector('div').classList.remove('text-white');
                btn.querySelector('div').classList.add('text-slate-300');
            });
            
            const selectedBtn = document.getElementById(method + 'Method');
            selectedBtn.classList.remove('border-slate-600');
            selectedBtn.classList.add('border-amber-400', 'bg-amber-500/10');
            selectedBtn.querySelector('div').classList.remove('text-slate-300');
            selectedBtn.querySelector('div').classList.add('text-white');
            
            // Show/hide payment forms
            document.getElementById('cardPaymentForm').classList.toggle('hidden', method !== 'card');
            document.getElementById('paypalPaymentForm').classList.toggle('hidden', method !== 'paypal');
            document.getElementById('applePaymentForm').classList.toggle('hidden', method !== 'apple');
            document.getElementById('googlePaymentForm').classList.toggle('hidden', method !== 'google');
            
            // Update processing fees display
            updateProcessingFees(method);
            
            // Show method-specific information
            showPaymentMethodInfo(method);
        }

        // Update processing fees display
        function updateProcessingFees(method) {
            const gateway = paymentGateways[method];
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const processingFee = Math.round(subtotal * gateway.fees);
            
            // Update checkout totals
            const processingFeeElement = document.getElementById('processingFee');
            if (processingFeeElement) {
                processingFeeElement.textContent = `₹${processingFee.toLocaleString('en-IN')}`;
            }
            
            // Recalculate total
            updateCheckoutDisplay();
        }

        // Show payment method specific information
        function showPaymentMethodInfo(method) {
            const gateway = paymentGateways[method];
            const infoElement = document.getElementById('paymentMethodInfo');
            
            if (infoElement) {
                let infoHTML = `
                    <div class="bg-slate-900/30 border border-slate-600 rounded-lg p-3 mb-4">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-sm font-medium text-white">${gateway.name}</span>
                            <span class="text-xs text-green-400">
                                <i class="fas fa-shield-alt mr-1"></i>
                                ${(gateway.successRate * 100).toFixed(1)}% Success Rate
                            </span>
                        </div>
                        <div class="text-xs text-slate-300">
                            Processing Fee: ${(gateway.fees * 100).toFixed(1)}% • 
                            Avg. Processing Time: ${gateway.processingTime / 1000}s
                        </div>
                    </div>
                `;
                infoElement.innerHTML = infoHTML;
            }
        }

        // Card number formatting and validation
        function formatCardNumber(input) {
            let value = input.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            input.value = formattedValue;
        }

        function detectCardType(cardNumber) {
            const number = cardNumber.replace(/\s/g, '');
            const cardIcons = document.getElementById('cardIcons');
            const cardTypeIcon = document.getElementById('cardTypeIcon');
            const validation = document.getElementById('cardValidation');
            
            // Reset icons
            cardIcons.querySelectorAll('i').forEach(icon => {
                icon.classList.remove('text-amber-400', 'text-blue-400', 'text-red-400');
                icon.classList.add('text-slate-500');
            });
            
            let cardType = '';
            let isValid = false;
            
            if (number.match(/^4/)) {
                cardType = 'Visa';
                cardIcons.querySelector('.fa-cc-visa').classList.remove('text-slate-500');
                cardIcons.querySelector('.fa-cc-visa').classList.add('text-blue-400');
                cardTypeIcon.innerHTML = '<i class="fab fa-cc-visa text-blue-400"></i>';
                isValid = number.length === 16 && luhnCheck(number);
            } else if (number.match(/^5[1-5]/)) {
                cardType = 'Mastercard';
                cardIcons.querySelector('.fa-cc-mastercard').classList.remove('text-slate-500');
                cardIcons.querySelector('.fa-cc-mastercard').classList.add('text-red-400');
                cardTypeIcon.innerHTML = '<i class="fab fa-cc-mastercard text-red-400"></i>';
                isValid = number.length === 16 && luhnCheck(number);
            } else if (number.match(/^3[47]/)) {
                cardType = 'American Express';
                cardIcons.querySelector('.fa-cc-amex').classList.remove('text-slate-500');
                cardIcons.querySelector('.fa-cc-amex').classList.add('text-blue-400');
                cardTypeIcon.innerHTML = '<i class="fab fa-cc-amex text-blue-400"></i>';
                isValid = number.length === 15 && luhnCheck(number);
            }
            
            paymentValidation.cardNumber = isValid;
            
            if (number.length > 0) {
                if (isValid) {
                    validation.innerHTML = '<i class="fas fa-check text-green-400 mr-1"></i>Valid ' + cardType + ' card';
                    validation.className = 'text-xs text-green-400 mt-1';
                } else if (number.length >= 13) {
                    validation.innerHTML = '<i class="fas fa-times text-red-400 mr-1"></i>Invalid card number';
                    validation.className = 'text-xs text-red-400 mt-1';
                } else {
                    validation.innerHTML = 'Enter your card number';
                    validation.className = 'text-xs text-slate-400 mt-1';
                }
            } else {
                validation.innerHTML = '';
                cardTypeIcon.innerHTML = '';
            }
        }

        // Luhn algorithm for card validation
        function luhnCheck(cardNumber) {
            let sum = 0;
            let alternate = false;
            for (let i = cardNumber.length - 1; i >= 0; i--) {
                let n = parseInt(cardNumber.charAt(i), 10);
                if (alternate) {
                    n *= 2;
                    if (n > 9) {
                        n = (n % 10) + 1;
                    }
                }
                sum += n;
                alternate = !alternate;
            }
            return (sum % 10) === 0;
        }

        // Expiry date formatting and validation
        function formatExpiryDate(input) {
            let value = input.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            input.value = value;
        }

        function validateExpiry(expiry) {
            const validation = document.getElementById('expiryValidation');
            const parts = expiry.split('/');
            
            if (parts.length === 2 && parts[0].length === 2 && parts[1].length === 2) {
                const month = parseInt(parts[0]);
                const year = parseInt('20' + parts[1]);
                const currentDate = new Date();
                const currentYear = currentDate.getFullYear();
                const currentMonth = currentDate.getMonth() + 1;
                
                if (month >= 1 && month <= 12) {
                    if (year > currentYear || (year === currentYear && month >= currentMonth)) {
                        paymentValidation.expiryDate = true;
                        validation.innerHTML = '<i class="fas fa-check text-green-400 mr-1"></i>Valid expiry date';
                        validation.className = 'text-xs text-green-400 mt-1';
                    } else {
                        paymentValidation.expiryDate = false;
                        validation.innerHTML = '<i class="fas fa-times text-red-400 mr-1"></i>Card has expired';
                        validation.className = 'text-xs text-red-400 mt-1';
                    }
                } else {
                    paymentValidation.expiryDate = false;
                    validation.innerHTML = '<i class="fas fa-times text-red-400 mr-1"></i>Invalid month';
                    validation.className = 'text-xs text-red-400 mt-1';
                }
            } else if (expiry.length > 0) {
                paymentValidation.expiryDate = false;
                validation.innerHTML = 'Format: MM/YY';
                validation.className = 'text-xs text-slate-400 mt-1';
            } else {
                validation.innerHTML = '';
            }
        }

        // CVV validation
        function validateCVV(cvv) {
            const validation = document.getElementById('cvvValidation');
            const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
            const isAmex = cardNumber.match(/^3[47]/);
            const requiredLength = isAmex ? 4 : 3;
            
            if (cvv.length === requiredLength && /^\d+$/.test(cvv)) {
                paymentValidation.cvv = true;
                validation.innerHTML = '<i class="fas fa-check text-green-400 mr-1"></i>Valid CVV';
                validation.className = 'text-xs text-green-400 mt-1';
            } else if (cvv.length > 0) {
                paymentValidation.cvv = false;
                validation.innerHTML = `<i class="fas fa-times text-red-400 mr-1"></i>CVV must be ${requiredLength} digits`;
                validation.className = 'text-xs text-red-400 mt-1';
            } else {
                validation.innerHTML = '';
            }
        }

        // Cardholder name validation
        function validateCardholderName(name) {
            const validation = document.getElementById('nameValidation');
            
            if (name.length >= 2 && /^[a-zA-Z\s]+$/.test(name)) {
                paymentValidation.cardholderName = true;
                validation.innerHTML = '<i class="fas fa-check text-green-400 mr-1"></i>Valid name';
                validation.className = 'text-xs text-green-400 mt-1';
            } else if (name.length > 0) {
                paymentValidation.cardholderName = false;
                validation.innerHTML = '<i class="fas fa-times text-red-400 mr-1"></i>Enter full name (letters only)';
                validation.className = 'text-xs text-red-400 mt-1';
            } else {
                validation.innerHTML = '';
            }
        }

        // Simple order placement popup
        function showOrderPlacedPopup() {
            // Create and show simple order confirmation popup
            const popup = document.createElement('div');
            popup.className = 'fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-60';
            popup.innerHTML = `
                <div class="bg-slate-800 rounded-lg p-8 max-w-md w-full mx-4 text-center border border-slate-700">
                    <div class="mb-6">
                        <div class="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-4">
                            <i class="fas fa-check-circle text-green-400 text-4xl"></i>
                        </div>
                        <h2 class="text-2xl font-bold text-white mb-2">Order Placed Successfully!</h2>
                        <p class="text-slate-300">Thank you for your purchase. Your order has been confirmed.</p>
                    </div>
                    <button onclick="closeOrderPlacedPopup()" class="bg-amber-500 text-slate-900 px-6 py-3 rounded-md hover:bg-amber-400 transition-colors font-semibold">
                        Continue Shopping
                    </button>
                </div>
            `;
            document.body.appendChild(popup);
            
            // Store reference for removal
            window.orderPlacedPopup = popup;
        }

        function closeOrderPlacedPopup() {
            if (window.orderPlacedPopup) {
                document.body.removeChild(window.orderPlacedPopup);
                window.orderPlacedPopup = null;
            }
            closeCheckout();
            showSection('home');
            
            // Save order to user's order history
            if (currentUser && cart.length > 0) {
                const newOrder = {
                    id: generateOrderId(),
                    date: new Date().toISOString().split('T')[0],
                    status: 'processing',
                    items: [...cart],
                    total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 199 + Math.round(cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 0.08),
                    shippingAddress: getShippingAddressFromForm(),
                    trackingNumber: null
                };
                
                userOrders.unshift(newOrder); // Add to beginning of array
            }
            
            // Clear cart
            cart = [];
            updateCartBadge();
            updateCartDisplay();
        }

        function getShippingAddressFromForm() {
            const form = document.getElementById('checkoutForm');
            if (!form) return 'Address not available';
            
            const firstName = form.querySelector('input[type="text"]')?.value || '';
            const lastName = form.querySelectorAll('input[type="text"]')[1]?.value || '';
            const address = form.querySelectorAll('input[type="text"]')[2]?.value || '';
            const city = form.querySelectorAll('input[type="text"]')[3]?.value || '';
            const state = form.querySelectorAll('input[type="text"]')[4]?.value || '';
            const zip = form.querySelectorAll('input[type="text"]')[5]?.value || '';
            
            return `${firstName} ${lastName}, ${address}, ${city}, ${state} ${zip}`.trim();
        }

        // Advanced payment processing with realistic gateway simulation
        function processOrder(event) {
            event.preventDefault();
            
            // Show immediate order confirmation popup
            closeCheckout();
            showOrderPlacedPopup();
            
            return; // Skip the complex payment processing for now
            
            if (paymentProcessing) return;
            
            // Check payment attempts
            if (paymentAttempts >= maxPaymentAttempts) {
                showPaymentError('Maximum payment attempts exceeded. Please try again later or contact support.');
                return;
            }
            
            // Validate payment method
            if (selectedPaymentMethod === 'card') {
                const allValid = Object.values(paymentValidation).every(valid => valid);
                if (!allValid) {
                    showPaymentError('Please complete all payment fields correctly.');
                    return;
                }
            }
            
            paymentProcessing = true;
            paymentAttempts++;
            
            // Show processing animation
            const submitButton = event.target.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.disabled = true;
            
            // Create payment processing modal
            showPaymentProcessingModal();
            
            // Process payment based on method
            switch (selectedPaymentMethod) {
                case 'card':
                    processCreditCardPayment(submitButton, originalText);
                    break;
                case 'paypal':
                    processPayPalPayment(submitButton, originalText);
                    break;
                case 'apple':
                    processApplePayPayment(submitButton, originalText);
                    break;
                case 'google':
                    processGooglePayPayment(submitButton, originalText);
                    break;
            }
        }

        // Credit card payment processing
        function processCreditCardPayment(submitButton, originalText) {
            const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
            const gateway = paymentGateways.card;
            
            updatePaymentStatus('Validating card details...');
            
            setTimeout(() => {
                updatePaymentStatus('Contacting bank...');
                
                setTimeout(() => {
                    updatePaymentStatus('Processing payment...');
                    
                    setTimeout(() => {
                        // Check if it's a test card
                        const testCard = testCards[cardNumber];
                        let paymentResult;
                        
                        if (testCard) {
                            paymentResult = testCard;
                        } else {
                            // Simulate random success/failure based on gateway success rate
                            const isSuccess = Math.random() < gateway.successRate;
                            paymentResult = {
                                result: isSuccess ? 'success' : 'declined',
                                reason: isSuccess ? null : 'Payment declined by bank',
                                bank: 'Demo Bank'
                            };
                        }
                        
                        if (paymentResult.result === 'success') {
                            handlePaymentSuccess(paymentResult, submitButton, originalText);
                        } else {
                            handlePaymentFailure(paymentResult, submitButton, originalText);
                        }
                    }, 1500);
                }, 1000);
            }, 800);
        }

        // PayPal payment processing
        function processPayPalPayment(submitButton, originalText) {
            const gateway = paymentGateways.paypal;
            
            updatePaymentStatus('Redirecting to PayPal...');
            
            setTimeout(() => {
                updatePaymentStatus('Authenticating with PayPal...');
                
                setTimeout(() => {
                    updatePaymentStatus('Processing PayPal payment...');
                    
                    setTimeout(() => {
                        const isSuccess = Math.random() < gateway.successRate;
                        const paymentResult = {
                            result: isSuccess ? 'success' : 'declined',
                            reason: isSuccess ? null : 'PayPal payment cancelled by user',
                            gateway: 'PayPal'
                        };
                        
                        if (paymentResult.result === 'success') {
                            handlePaymentSuccess(paymentResult, submitButton, originalText);
                        } else {
                            handlePaymentFailure(paymentResult, submitButton, originalText);
                        }
                    }, 1000);
                }, 800);
            }, 500);
        }

        // Apple Pay payment processing
        function processApplePayPayment(submitButton, originalText) {
            const gateway = paymentGateways.apple;
            
            updatePaymentStatus('Requesting biometric authentication...');
            
            setTimeout(() => {
                updatePaymentStatus('Verifying Touch ID / Face ID...');
                
                setTimeout(() => {
                    updatePaymentStatus('Processing Apple Pay payment...');
                    
                    setTimeout(() => {
                        const isSuccess = Math.random() < gateway.successRate;
                        const paymentResult = {
                            result: isSuccess ? 'success' : 'declined',
                            reason: isSuccess ? null : 'Biometric authentication failed',
                            gateway: 'Apple Pay'
                        };
                        
                        if (paymentResult.result === 'success') {
                            handlePaymentSuccess(paymentResult, submitButton, originalText);
                        } else {
                            handlePaymentFailure(paymentResult, submitButton, originalText);
                        }
                    }, 800);
                }, 600);
            }, 400);
        }

        // Google Pay payment processing
        function processGooglePayPayment(submitButton, originalText) {
            const gateway = paymentGateways.google;
            
            updatePaymentStatus('Connecting to Google Pay...');
            
            setTimeout(() => {
                updatePaymentStatus('Verifying payment method...');
                
                setTimeout(() => {
                    updatePaymentStatus('Processing Google Pay payment...');
                    
                    setTimeout(() => {
                        const isSuccess = Math.random() < gateway.successRate;
                        const paymentResult = {
                            result: isSuccess ? 'success' : 'declined',
                            reason: isSuccess ? null : 'Google Pay authentication failed',
                            gateway: 'Google Pay'
                        };
                        
                        if (paymentResult.result === 'success') {
                            handlePaymentSuccess(paymentResult, submitButton, originalText);
                        } else {
                            handlePaymentFailure(paymentResult, submitButton, originalText);
                        }
                    }, 900);
                }, 700);
            }, 500);
        }

        // Handle successful payment
        function handlePaymentSuccess(paymentResult, submitButton, originalText) {
            const transactionId = generateTransactionId();
            const gateway = paymentGateways[selectedPaymentMethod];
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const processingFee = Math.round(subtotal * gateway.fees);
            
            updatePaymentStatus('Payment successful!');
            
            setTimeout(() => {
                hidePaymentProcessingModal();
                
                // Show order confirmation modal with detailed receipt
                showOrderConfirmationModal({
                    transactionId,
                    paymentMethod: selectedPaymentMethod,
                    gateway: gateway.name,
                    amount: subtotal + 199 + (subtotal * 0.08) + processingFee,
                    processingFee,
                    bank: paymentResult.bank || paymentResult.gateway
                });
                
                // Clear cart and reset
                cart = [];
                updateCartBadge();
                paymentAttempts = 0;
                
                // Reset button
                submitButton.disabled = false;
                submitButton.textContent = originalText;
                
                // Reset form
                document.getElementById('checkoutForm').reset();
                resetPaymentValidation();
                
                paymentProcessing = false;
            }, 1500);
        }

        // Handle payment failure
        function handlePaymentFailure(paymentResult, submitButton, originalText) {
            updatePaymentStatus('Payment failed');
            
            setTimeout(() => {
                hidePaymentProcessingModal();
                
                showPaymentError(
                    `Payment ${paymentResult.result}: ${paymentResult.reason}\n\n` +
                    `Attempt ${paymentAttempts} of ${maxPaymentAttempts}\n\n` +
                    (paymentAttempts < maxPaymentAttempts ? 'Please try again or use a different payment method.' : 'Maximum attempts reached. Please contact support.')
                );
                
                // Reset button
                submitButton.disabled = false;
                submitButton.textContent = originalText;
                
                paymentProcessing = false;
            }, 1500);
        }

        // Generate realistic transaction ID
        function generateTransactionId() {
            const prefix = selectedPaymentMethod.toUpperCase().substring(0, 3);
            const timestamp = Date.now().toString().slice(-8);
            const random = Math.random().toString(36).substring(2, 6).toUpperCase();
            return `${prefix}${timestamp}${random}`;
        }

        // Reset payment validation
        function resetPaymentValidation() {
            paymentValidation = {
                cardNumber: false,
                expiryDate: false,
                cvv: false,
                cardholderName: false
            };
            
            // Clear validation messages
            ['cardValidation', 'expiryValidation', 'cvvValidation', 'nameValidation'].forEach(id => {
                const element = document.getElementById(id);
                if (element) element.innerHTML = '';
            });
            
            // Reset card type icon
            document.getElementById('cardTypeIcon').innerHTML = '';
            
            // Reset card icons
            document.getElementById('cardIcons').querySelectorAll('i').forEach(icon => {
                icon.classList.remove('text-amber-400', 'text-blue-400', 'text-red-400');
                icon.classList.add('text-slate-500');
            });
        }

        // Authentication functions
        function toggleAuth() {
            if (currentUser) {
                // Show user menu or logout
                showUserMenu();
            } else {
                document.getElementById('authModal').classList.toggle('hidden');
            }
        }

        function showAuthModal(message = '') {
            if (message) {
                // Show message above the auth form
                const authModal = document.getElementById('authModal');
                const existingMessage = authModal.querySelector('.auth-message');
                if (existingMessage) {
                    existingMessage.remove();
                }
                
                const messageDiv = document.createElement('div');
                messageDiv.className = 'auth-message bg-amber-900/20 border border-amber-700 rounded-lg p-3 mb-4 text-center';
                messageDiv.innerHTML = `<i class="fas fa-info-circle text-amber-400 mr-2"></i><span class="text-amber-300">${message}</span>`;
                
                const authContent = authModal.querySelector('.bg-slate-800');
                const authTitle = authContent.querySelector('#authTitle').parentElement;
                authTitle.parentElement.insertBefore(messageDiv, authTitle.nextSibling);
            }
            
            document.getElementById('authModal').classList.remove('hidden');
        }

        function showUserMenu() {
            // Create dropdown menu for logged-in users
            const existingMenu = document.getElementById('userDropdown');
            if (existingMenu) {
                existingMenu.remove();
                return;
            }

            const dropdown = document.createElement('div');
            dropdown.id = 'userDropdown';
            dropdown.className = 'absolute right-0 top-12 bg-slate-800 border border-slate-700 rounded-lg shadow-2xl z-50 min-w-48';
            dropdown.innerHTML = `
                <div class="p-3 border-b border-slate-700">
                    <div class="text-white font-semibold">${currentUser.firstName || 'User'}</div>
                    <div class="text-slate-400 text-sm">${currentUser.email}</div>
                </div>
                <div class="py-2">
                    <a href="#" onclick="showUserSection('profile'); closeUserMenu();" class="block px-4 py-2 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
                        <i class="fas fa-user mr-2"></i>My Profile
                    </a>
                    <a href="#" onclick="showUserSection('orders'); closeUserMenu();" class="block px-4 py-2 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
                        <i class="fas fa-shopping-bag mr-2"></i>My Orders
                    </a>
                    <div class="border-t border-slate-700 my-2"></div>
                    <a href="#" onclick="logout(); closeUserMenu();" class="block px-4 py-2 text-red-400 hover:bg-red-900/20 hover:text-red-300 transition-colors">
                        <i class="fas fa-sign-out-alt mr-2"></i>Sign Out
                    </a>
                </div>
            `;

            const authButton = document.getElementById('authButton');
            authButton.parentElement.style.position = 'relative';
            authButton.parentElement.appendChild(dropdown);
        }

        function closeUserMenu() {
            const dropdown = document.getElementById('userDropdown');
            if (dropdown) {
                dropdown.remove();
            }
        }

        function updateAuthUI() {
            const authButton = document.getElementById('authButton');
            const userGreeting = document.getElementById('userGreeting');
            const ordersLink = document.getElementById('ordersLink');
            const profileLink = document.getElementById('profileLink');

            if (currentUser) {
                userGreeting.textContent = `Hi, ${currentUser.firstName || 'User'}`;
                userGreeting.classList.remove('hidden');
                ordersLink.style.display = 'block';
                profileLink.style.display = 'block';
                authButton.onclick = showUserMenu;
            } else {
                userGreeting.classList.add('hidden');
                ordersLink.style.display = 'none';
                profileLink.style.display = 'none';
                authButton.onclick = toggleAuth;
            }
        }

        function logout() {
            currentUser = null;
            userOrders = [];
            userProfile = {};
            updateAuthUI();
            showSection('home');
            alert('You have been signed out successfully.');
        }

        function switchAuthTab(tab) {
            const signinTab = document.getElementById('signinTab');
            const signupTab = document.getElementById('signupTab');
            const signupFields = document.getElementById('signupFields');
            const authTitle = document.getElementById('authTitle');
            const submitButton = document.querySelector('#authForm button[type="submit"]');
            
            if (tab === 'signin') {
                signinTab.classList.add('border-purple-600', 'text-purple-600');
                signinTab.classList.remove('border-transparent', 'text-gray-500');
                signupTab.classList.remove('border-purple-600', 'text-purple-600');
                signupTab.classList.add('border-transparent', 'text-gray-500');
                signupFields.classList.add('hidden');
                authTitle.textContent = 'Sign In';
                submitButton.textContent = 'Sign In';
            } else {
                signupTab.classList.add('border-purple-600', 'text-purple-600');
                signupTab.classList.remove('border-transparent', 'text-gray-500');
                signinTab.classList.remove('border-purple-600', 'text-purple-600');
                signinTab.classList.add('border-transparent', 'text-gray-500');
                signupFields.classList.remove('hidden');
                authTitle.textContent = 'Sign Up';
                submitButton.textContent = 'Sign Up';
            }
        }

        function handleAuth(event) {
            event.preventDefault();
            const isSignup = !document.getElementById('signupFields').classList.contains('hidden');
            const form = event.target;
            const formData = new FormData(form);
            
            // Get form values
            const email = form.querySelector('input[type="email"]').value;
            const password = form.querySelector('input[type="password"]').value;
            const fullName = isSignup ? form.querySelector('input[type="text"]').value : '';
            
            // Simulate authentication
            setTimeout(() => {
                if (isSignup) {
                    // Create new user
                    const nameParts = fullName.split(' ');
                    currentUser = {
                        email: email,
                        firstName: nameParts[0] || 'User',
                        lastName: nameParts.slice(1).join(' ') || '',
                        phone: '',
                        dateOfBirth: '',
                        gender: '',
                        streetAddress: '',
                        city: '',
                        state: '',
                        zipCode: '',
                        country: 'IN',
                        preferences: {
                            fragrances: [],
                            emailNewsletter: true,
                            smsNotifications: false,
                            productRecommendations: true,
                            currency: 'INR',
                            language: 'en'
                        },
                        twoFactorEnabled: false
                    };
                    userProfile = { ...currentUser };
                    alert('Account created successfully! Welcome to Uamore!');
                } else {
                    // Sign in existing user (demo)
                    currentUser = {
                        email: email,
                        firstName: 'Demo',
                        lastName: 'User',
                        phone: '+91 98765 43210',
                        dateOfBirth: '1990-01-01',
                        gender: 'prefer-not-to-say',
                        streetAddress: '123 Demo Street',
                        city: 'Mumbai',
                        state: 'Maharashtra',
                        zipCode: '400001',
                        country: 'IN',
                        preferences: {
                            fragrances: ['floral', 'citrus'],
                            emailNewsletter: true,
                            smsNotifications: true,
                            productRecommendations: true,
                            currency: 'INR',
                            language: 'en'
                        },
                        twoFactorEnabled: false
                    };
                    userProfile = { ...currentUser };
                    
                    // Load demo orders for existing user
                    loadDemoOrders();
                    
                    alert('Signed in successfully! Welcome back!');
                }
                
                updateAuthUI();
                toggleAuth();
                
                // Clear auth message if exists
                const authMessage = document.querySelector('.auth-message');
                if (authMessage) {
                    authMessage.remove();
                }
            }, 500);
        }

        function loadDemoOrders() {
            // Create some demo orders for the signed-in user
            userOrders = [
                {
                    id: 'UAM789123ABC',
                    date: '2024-01-15',
                    status: 'delivered',
                    items: [
                        { ...products[0], quantity: 1 },
                        { ...products[2], quantity: 1 }
                    ],
                    total: 10998,
                    shippingAddress: '123 Demo Street, Mumbai, Maharashtra 400001',
                    trackingNumber: 'TRK123456789'
                },
                {
                    id: 'UAM456789DEF',
                    date: '2024-01-28',
                    status: 'shipped',
                    items: [
                        { ...products[1], quantity: 2 }
                    ],
                    total: 8197,
                    shippingAddress: '123 Demo Street, Mumbai, Maharashtra 400001',
                    trackingNumber: 'TRK987654321'
                },
                {
                    id: 'UAM321654GHI',
                    date: '2024-02-05',
                    status: 'processing',
                    items: [
                        { ...products[3], quantity: 1 },
                        { ...products[4], quantity: 1 }
                    ],
                    total: 9798,
                    shippingAddress: '123 Demo Street, Mumbai, Maharashtra 400001',
                    trackingNumber: null
                }
            ];
        }

        // Contact form
        function submitContactForm(event) {
            event.preventDefault();
            alert('Thank you for your message! We\'ll get back to you soon. This is a demo form.');
            event.target.reset();
        }

        // Newsletter subscription
        function subscribeNewsletter(event) {
            event.preventDefault();
            alert('Thank you for subscribing! You\'ll receive exclusive offers and fragrance tips. This is a demo form.');
            event.target.reset();
        }

        // User section functions
        function showUserSection(section) {
            if (!currentUser) {
                showAuthModal('Please sign in to access this section');
                return;
            }
            
            // Hide all sections
            document.querySelectorAll('.section-content').forEach(sec => {
                sec.classList.add('hidden');
            });
            
            // Show selected section
            document.getElementById(section + 'Section').classList.remove('hidden');
            
            if (section === 'orders') {
                displayOrders();
            } else if (section === 'profile') {
                loadProfileData();
                showProfileTab('personal');
            }
        }

        function displayOrders() {
            const ordersContainer = document.getElementById('ordersContainer');
            const noOrdersMessage = document.getElementById('noOrdersMessage');
            
            if (userOrders.length === 0) {
                ordersContainer.innerHTML = '';
                noOrdersMessage.classList.remove('hidden');
                return;
            }
            
            noOrdersMessage.classList.add('hidden');
            
            ordersContainer.innerHTML = userOrders.map(order => {
                const statusColors = {
                    'processing': 'bg-yellow-900/20 border-yellow-700 text-yellow-300',
                    'shipped': 'bg-blue-900/20 border-blue-700 text-blue-300',
                    'delivered': 'bg-green-900/20 border-green-700 text-green-300',
                    'cancelled': 'bg-red-900/20 border-red-700 text-red-300'
                };
                
                const statusIcons = {
                    'processing': 'fas fa-clock',
                    'shipped': 'fas fa-shipping-fast',
                    'delivered': 'fas fa-check-circle',
                    'cancelled': 'fas fa-times-circle'
                };
                
                return `
                    <div class="bg-slate-800/50 rounded-lg shadow-2xl border border-slate-700 overflow-hidden">
                        <div class="p-6">
                            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                                <div>
                                    <h3 class="text-xl font-bold text-white mb-2">Order #${order.id}</h3>
                                    <p class="text-slate-400">Placed on ${new Date(order.date).toLocaleDateString('en-IN', { 
                                        year: 'numeric', 
                                        month: 'long', 
                                        day: 'numeric' 
                                    })}</p>
                                </div>
                                <div class="mt-4 lg:mt-0">
                                    <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${statusColors[order.status]}">
                                        <i class="${statusIcons[order.status]} mr-2"></i>
                                        ${order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                    </span>
                                </div>
                            </div>
                            
                            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div class="lg:col-span-2">
                                    <h4 class="font-semibold text-white mb-3">Items (${order.items.length})</h4>
                                    <div class="space-y-3">
                                        ${order.items.map(item => `
                                            <div class="flex items-center space-x-4 bg-slate-900/30 border border-slate-600 rounded-lg p-3">
                                                <div class="bg-gradient-to-br from-slate-900 via-slate-800 to-black w-12 h-12 rounded flex items-center justify-center relative overflow-hidden">
                                                    <div class="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
                                                    <svg width="24" height="36" viewBox="0 0 120 160" class="drop-shadow-lg">
                                                        <defs>
                                                            <radialGradient id="orderCrystalGlass${item.id}" cx="30%" cy="20%" r="80%">
                                                                <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.9" />
                                                                <stop offset="30%" style="stop-color:#f1f5f9;stop-opacity:0.8" />
                                                                <stop offset="70%" style="stop-color:#e2e8f0;stop-opacity:0.7" />
                                                                <stop offset="100%" style="stop-color:#cbd5e1;stop-opacity:0.6" />
                                                            </radialGradient>
                                                            <linearGradient id="orderPremiumLiquid${item.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                                                                <stop offset="0%" style="stop-color:#fef3c7;stop-opacity:0.9" />
                                                                <stop offset="30%" style="stop-color:#fbbf24;stop-opacity:0.85" />
                                                                <stop offset="70%" style="stop-color:#f59e0b;stop-opacity:0.9" />
                                                                <stop offset="100%" style="stop-color:#d97706;stop-opacity:0.95" />
                                                            </linearGradient>
                                                            <linearGradient id="orderLuxuryCap${item.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                                                                <stop offset="0%" style="stop-color:#fef3c7" />
                                                                <stop offset="20%" style="stop-color:#fbbf24" />
                                                                <stop offset="50%" style="stop-color:#f59e0b" />
                                                                <stop offset="80%" style="stop-color:#d97706" />
                                                                <stop offset="100%" style="stop-color:#92400e" />
                                                            </linearGradient>
                                                        </defs>
                                                        <ellipse cx="60" cy="145" rx="18" ry="6" fill="url(#orderPremiumLiquid${item.id})" opacity="0.15"/>
                                                        <ellipse cx="60" cy="147" rx="14" ry="4" fill="black" opacity="0.3"/>
                                                        <path d="M40 55 Q40 48 45 48 L75 48 Q80 48 80 55 L80 125 Q80 135 70 135 L50 135 Q40 135 40 125 Z" 
                                                              fill="url(#orderCrystalGlass${item.id})" stroke="#e2e8f0" stroke-width="0.3"/>
                                                        <path d="M40 55 Q40 45 50 42 L70 42 Q80 45 80 55" 
                                                              fill="url(#orderCrystalGlass${item.id})" stroke="#e2e8f0" stroke-width="0.3"/>
                                                        <rect x="52" y="28" width="16" height="20" rx="3" 
                                                              fill="url(#orderCrystalGlass${item.id})" stroke="#e2e8f0" stroke-width="0.3"/>
                                                        <rect x="46" y="18" width="28" height="14" rx="7" 
                                                              fill="url(#orderLuxuryCap${item.id})" stroke="#92400e" stroke-width="0.2"/>
                                                        <rect x="48" y="20" width="24" height="10" rx="5" fill="#fbbf24" opacity="0.9"/>
                                                        <rect x="50" y="22" width="20" height="6" rx="3" fill="#fef3c7" opacity="0.7"/>
                                                        <path d="M42 60 L42 122 Q42 132 50 132 L70 132 Q78 132 78 122 L78 60 Z" 
                                                              fill="url(#orderPremiumLiquid${item.id})"/>
                                                        <ellipse cx="60" cy="60" rx="18" ry="2" fill="#fef3c7" opacity="0.8"/>
                                                        <path d="M42 55 Q42 50 45 50 L47 50 L47 130 Q45 130 42 127 Z" fill="white" opacity="0.3"/>
                                                        <path d="M73 55 L75 55 Q77 55 77 57 L77 65" stroke="white" stroke-width="1" opacity="0.5" fill="none"/>
                                                        <rect x="48" y="75" width="24" height="25" rx="2" fill="white" opacity="0.98" stroke="#fbbf24" stroke-width="0.3"/>
                                                        <rect x="52" y="82" width="16" height="1" rx="0.5" fill="#1f2937"/>
                                                        <rect x="52" y="87" width="12" height="0.8" rx="0.4" fill="#6b7280"/>
                                                        <circle cx="60" cy="93" r="2" fill="none" stroke="#fbbf24" stroke-width="0.4"/>
                                                        <circle cx="60" cy="93" r="0.8" fill="#fbbf24"/>
                                                        <rect x="44" y="55" width="1" height="40" rx="0.5" fill="white" opacity="0.3"/>
                                                        <ellipse cx="60" cy="135" rx="20" ry="1.5" fill="url(#orderCrystalGlass${item.id})" opacity="0.8"/>
                                                    </svg>
                                                </div>
                                                <div class="flex-1">
                                                    <h5 class="font-semibold text-white">${item.name}</h5>
                                                    <p class="text-slate-400 text-sm capitalize">${item.category} • Qty: ${item.quantity}</p>
                                                </div>
                                                <div class="text-right">
                                                    <div class="font-semibold text-amber-400">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                                
                                <div>
                                    <div class="bg-slate-900/30 border border-slate-600 rounded-lg p-4">
                                        <h4 class="font-semibold text-white mb-3">Order Summary</h4>
                                        <div class="space-y-2 text-sm">
                                            <div class="flex justify-between">
                                                <span class="text-slate-400">Total:</span>
                                                <span class="text-white font-semibold">₹${order.total.toLocaleString('en-IN')}</span>
                                            </div>
                                            ${order.trackingNumber ? `
                                                <div class="flex justify-between">
                                                    <span class="text-slate-400">Tracking:</span>
                                                    <span class="text-amber-400 font-mono text-xs">${order.trackingNumber}</span>
                                                </div>
                                            ` : ''}
                                        </div>
                                        
                                        <div class="mt-4 pt-3 border-t border-slate-600">
                                            <h5 class="text-sm font-medium text-white mb-2">Shipping Address</h5>
                                            <p class="text-slate-300 text-xs">${order.shippingAddress}</p>
                                        </div>
                                        
                                        <div class="mt-4 space-y-2">
                                            ${order.trackingNumber ? `
                                                <button onclick="trackOrderStatus('${order.trackingNumber}')" class="w-full bg-blue-600/20 border border-blue-600/30 text-blue-300 py-2 px-3 rounded-md hover:bg-blue-600/30 transition-colors text-sm">
                                                    <i class="fas fa-search mr-2"></i>Track Package
                                                </button>
                                            ` : ''}
                                            <button onclick="reorderItems('${order.id}')" class="w-full bg-amber-500/20 border border-amber-500/30 text-amber-300 py-2 px-3 rounded-md hover:bg-amber-500/30 transition-colors text-sm">
                                                <i class="fas fa-redo mr-2"></i>Reorder Items
                                            </button>
                                            ${order.status === 'delivered' ? `
                                                <button onclick="writeReview('${order.id}')" class="w-full bg-green-600/20 border border-green-600/30 text-green-300 py-2 px-3 rounded-md hover:bg-green-600/30 transition-colors text-sm">
                                                    <i class="fas fa-star mr-2"></i>Write Review
                                                </button>
                                            ` : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        function trackOrderStatus(trackingNumber) {
            alert(`Tracking Order: ${trackingNumber}\n\nThis is a demo tracking system. In a real application, this would show detailed tracking information from the shipping carrier.`);
        }

        function reorderItems(orderId) {
            const order = userOrders.find(o => o.id === orderId);
            if (order) {
                // Add all items from the order to cart
                order.items.forEach(item => {
                    const existingItem = cart.find(cartItem => cartItem.id === item.id);
                    if (existingItem) {
                        existingItem.quantity += item.quantity;
                    } else {
                        cart.push({ ...item });
                    }
                });
                
                updateCartBadge();
                updateCartDisplay();
                showCartNotification(`${order.items.length} item(s) added to cart from previous order`);
            }
        }

        function writeReview(orderId) {
            alert('Review feature coming soon! You will be able to rate and review your purchased items.');
        }

        // Profile management functions
        function loadProfileData() {
            if (!currentUser) return;
            
            // Load personal information
            document.getElementById('firstName').value = currentUser.firstName || '';
            document.getElementById('lastName').value = currentUser.lastName || '';
            document.getElementById('profileEmailInput').value = currentUser.email || '';
            document.getElementById('phone').value = currentUser.phone || '';
            document.getElementById('dateOfBirth').value = currentUser.dateOfBirth || '';
            document.getElementById('gender').value = currentUser.gender || '';
            
            // Load address information
            document.getElementById('streetAddress').value = currentUser.streetAddress || '';
            document.getElementById('city').value = currentUser.city || '';
            document.getElementById('state').value = currentUser.state || '';
            document.getElementById('zipCode').value = currentUser.zipCode || '';
            document.getElementById('country').value = currentUser.country || 'IN';
            
            // Load preferences
            if (currentUser.preferences) {
                // Fragrance preferences
                const fragranceCheckboxes = document.querySelectorAll('#preferencesForm input[type="checkbox"][value]');
                fragranceCheckboxes.forEach(checkbox => {
                    checkbox.checked = currentUser.preferences.fragrances.includes(checkbox.value);
                });
                
                // Communication preferences
                document.getElementById('emailNewsletter').checked = currentUser.preferences.emailNewsletter || false;
                document.getElementById('smsNotifications').checked = currentUser.preferences.smsNotifications || false;
                document.getElementById('productRecommendations').checked = currentUser.preferences.productRecommendations || false;
                
                // Currency and language
                document.getElementById('currency').value = currentUser.preferences.currency || 'INR';
                document.getElementById('language').value = currentUser.preferences.language || 'en';
            }
            
            // Update profile display
            document.getElementById('profileName').textContent = `${currentUser.firstName} ${currentUser.lastName}`.trim() || 'User';
            document.getElementById('profileEmail').textContent = currentUser.email;
        }

        function showProfileTab(tab) {
            // Hide all tabs
            document.querySelectorAll('.profile-tab').forEach(tabContent => {
                tabContent.classList.add('hidden');
            });
            
            // Remove active state from all tab buttons
            document.querySelectorAll('#personalTab, #addressTab, #preferencesTab, #securityTab').forEach(button => {
                button.classList.remove('bg-amber-500/20', 'text-amber-400', 'border-amber-500/30');
                button.classList.add('text-slate-300');
            });
            
            // Show selected tab
            document.getElementById(tab + 'Info').classList.remove('hidden');
            
            // Add active state to selected tab button
            const activeButton = document.getElementById(tab + 'Tab');
            activeButton.classList.add('bg-amber-500/20', 'text-amber-400', 'border-amber-500/30');
            activeButton.classList.remove('text-slate-300');
        }

        function savePersonalInfo(event) {
            event.preventDefault();
            
            // Update current user data
            currentUser.firstName = document.getElementById('firstName').value;
            currentUser.lastName = document.getElementById('lastName').value;
            currentUser.email = document.getElementById('profileEmailInput').value;
            currentUser.phone = document.getElementById('phone').value;
            currentUser.dateOfBirth = document.getElementById('dateOfBirth').value;
            currentUser.gender = document.getElementById('gender').value;
            
            // Update profile display
            document.getElementById('profileName').textContent = `${currentUser.firstName} ${currentUser.lastName}`.trim() || 'User';
            document.getElementById('profileEmail').textContent = currentUser.email;
            
            // Update auth UI
            updateAuthUI();
            
            alert('Personal information updated successfully!');
        }

        function saveAddress(event) {
            event.preventDefault();
            
            // Update current user address data
            currentUser.streetAddress = document.getElementById('streetAddress').value;
            currentUser.city = document.getElementById('city').value;
            currentUser.state = document.getElementById('state').value;
            currentUser.zipCode = document.getElementById('zipCode').value;
            currentUser.country = document.getElementById('country').value;
            
            alert('Address information saved successfully!');
        }

        function savePreferences(event) {
            event.preventDefault();
            
            // Update fragrance preferences
            const fragranceCheckboxes = document.querySelectorAll('#preferencesForm input[type="checkbox"][value]');
            const selectedFragrances = [];
            fragranceCheckboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    selectedFragrances.push(checkbox.value);
                }
            });
            
            // Update current user preferences
            currentUser.preferences = {
                fragrances: selectedFragrances,
                emailNewsletter: document.getElementById('emailNewsletter').checked,
                smsNotifications: document.getElementById('smsNotifications').checked,
                productRecommendations: document.getElementById('productRecommendations').checked,
                currency: document.getElementById('currency').value,
                language: document.getElementById('language').value
            };
            
            alert('Preferences saved successfully!');
        }

        function changePassword(event) {
            event.preventDefault();
            
            const currentPassword = document.getElementById('currentPassword').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (newPassword !== confirmPassword) {
                alert('New passwords do not match!');
                return;
            }
            
            if (newPassword.length < 6) {
                alert('Password must be at least 6 characters long!');
                return;
            }
            
            // In a real app, you would verify the current password
            alert('Password updated successfully!');
            document.getElementById('passwordForm').reset();
        }

        function toggle2FA() {
            const button = document.getElementById('twoFAButton');
            const isEnabled = currentUser.twoFactorEnabled;
            
            if (isEnabled) {
                currentUser.twoFactorEnabled = false;
                button.textContent = 'Enable';
                button.classList.remove('bg-green-600', 'text-white');
                button.classList.add('bg-slate-600', 'text-slate-300');
                alert('Two-factor authentication disabled.');
            } else {
                currentUser.twoFactorEnabled = true;
                button.textContent = 'Disable';
                button.classList.remove('bg-slate-600', 'text-slate-300');
                button.classList.add('bg-green-600', 'text-white');
                alert('Two-factor authentication enabled! You will receive SMS codes for login.');
            }
        }

        function downloadAccountData() {
            const accountData = {
                personalInfo: {
                    firstName: currentUser.firstName,
                    lastName: currentUser.lastName,
                    email: currentUser.email,
                    phone: currentUser.phone,
                    dateOfBirth: currentUser.dateOfBirth,
                    gender: currentUser.gender
                },
                address: {
                    streetAddress: currentUser.streetAddress,
                    city: currentUser.city,
                    state: currentUser.state,
                    zipCode: currentUser.zipCode,
                    country: currentUser.country
                },
                preferences: currentUser.preferences,
                orders: userOrders,
                accountCreated: new Date().toISOString(),
                dataExported: new Date().toISOString()
            };
            
            const dataStr = JSON.stringify(accountData, null, 2);
            const blob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `Uamore_Account_Data_${currentUser.email.replace('@', '_')}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            alert('Account data downloaded successfully!');
        }

        function deleteAccount() {
            const confirmation = confirm('Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed.');
            
            if (confirmation) {
                const finalConfirmation = prompt('Type "DELETE" to confirm account deletion:');
                
                if (finalConfirmation === 'DELETE') {
                    // In a real app, this would make an API call to delete the account
                    alert('Account deletion request submitted. You will receive a confirmation email within 24 hours. This is a demo - no actual deletion occurred.');
                } else {
                    alert('Account deletion cancelled.');
                }
            }
        }

        // Close modals when clicking outside
        document.addEventListener('click', function(event) {
            const modals = ['productModal', 'authModal', 'checkoutModal'];
            modals.forEach(modalId => {
                const modal = document.getElementById(modalId);
                if (event.target === modal) {
                    modal.classList.add('hidden');
                }
            });
        });

        // Close cart when clicking outside
        document.addEventListener('click', function(event) {
            const cartSidebar = document.getElementById('cartSidebar');
            const cartButton = event.target.closest('[onclick="toggleCart()"]');
            
            if (!cartSidebar.contains(event.target) && !cartButton && !cartSidebar.classList.contains('translate-x-full')) {
                cartSidebar.classList.add('translate-x-full');
            }
            
            // Close user dropdown when clicking outside
            const userDropdown = document.getElementById('userDropdown');
            const authButton = document.getElementById('authButton');
            
            if (userDropdown && !userDropdown.contains(event.target) && !authButton.contains(event.target)) {
                closeUserMenu();
            }
        });
   
(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'969cf65be678a764',t:'MTc1NDI5OTA1My4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();