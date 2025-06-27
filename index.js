 // Recipe data
      const recipes = {
        "salad-organik": {
          title: "Salad Sayur Organik",
          ingredients: [
            "200g selada organik segar",
            "100g tomat cherry organik",
            "50g mentimun organik",
            "30g wortel organik, parut halus",
            "2 sdm minyak zaitun extra virgin",
            "1 sdm cuka apel",
            "1 sdt madu organik",
            "Garam dan merica secukupnya",
          ],
          instructions: [
            "Cuci bersih semua sayuran organik dengan air mengalir",
            "Potong selada menjadi ukuran sedang, belah tomat cherry",
            "Iris mentimun tipis dan parut wortel halus",
            "Campurkan minyak zaitun, cuka apel, madu, garam dan merica untuk dressing",
            "Tata sayuran dalam mangkuk saji",
            "Siram dengan dressing dan aduk rata",
            "Sajikan segera selagi segar",
          ],
        },
        "strawberry-smoothie": {
          title: "Strawberry Smoothie Bowl",
          ingredients: [
            "200g strawberry organik beku",
            "1 buah pisang matang",
            "100ml susu almond",
            "1 sdm madu organik",
            "1 sdm chia seeds",
            "Topping: granola, strawberry segar, kacang almond",
          ],
          instructions: [
            "Masukkan strawberry beku, pisang, dan susu almond ke dalam blender",
            "Tambahkan madu dan chia seeds",
            "Blend hingga tekstur halus dan creamy",
            "Tuang ke dalam mangkuk saji",
            "Hias dengan topping granola, potongan strawberry segar, dan kacang almond",
            "Sajikan segera dengan sendok",
          ],
        },
        "nasi-tomat": {
          title: "Nasi Tomat Sehat",
          ingredients: [
            "200g beras organik",
            "300g tomat organik matang",
            "1 buah bawang bombay",
            "2 siung bawang putih",
            "400ml kaldu sayuran",
            "2 sdm minyak zaitun",
            "Garam, merica, dan oregano secukupnya",
          ],
          instructions: [
            "Cuci beras hingga bersih dan tiriskan",
            "Haluskan tomat, iris bawang bombay dan bawang putih",
            "Panaskan minyak zaitun, tumis bawang bombay dan bawang putih hingga harum",
            "Masukkan tomat halus, masak hingga mengental",
            "Tambahkan beras, aduk rata dengan bumbu tomat",
            "Tuang kaldu sayuran, bumbui dengan garam, merica, dan oregano",
            "Masak dengan api kecil hingga nasi matang dan bumbu meresap",
            "Sajikan hangat sebagai hidangan utama",
          ],
        },
      };

      // Farmer data
      const farmers = {
        budi: {
          name: "Pak Budi Santoso",
          location: "Lembang, Bandung",
          image: "assets/images/pak_budi.png",
          fullBio:
            "Pak Budi Santoso adalah petani generasi ketiga yang telah mengabdikan hidupnya untuk pertanian organik selama lebih dari 25 tahun. Beliau memulai perjalanan organiknya pada tahun 1998 ketika melihat dampak negatif pestisida kimia terhadap lingkungan dan kesehatan keluarga. Dengan lahan seluas 5 hektar di Lembang, Pak Budi mengkhususkan diri dalam budidaya sayuran organik seperti selada, bayam, kangkung, dan berbagai jenis cabai. Beliau juga aktif dalam komunitas petani organik Bandung dan sering memberikan pelatihan kepada petani muda tentang teknik pertanian berkelanjutan.",
          specialties: [
            "Sayuran Organik",
            "Pertanian Berkelanjutan",
            "Kompos Alami",
          ],
          experience: "25+ tahun",
          contact: {
            phone: "+62 812-3456-7891",
            whatsapp: "+6281234567891",
          },
        },
        sari: {
          name: "Ibu Sari Wijaya",
          location: "Ciwidey, Bandung",
          image: "assets/images/ibu_sari.png",
          fullBio:
            "Ibu Sari Wijaya adalah pionir agrowisata strawberry di kawasan Ciwidey. Dengan latar belakang pendidikan pertanian, beliau memulai kebun strawberry organiknya pada tahun 2005. Kini kebunnya telah menjadi destinasi agrowisata favorit dengan lebih dari 15 varietas strawberry yang ditanam secara organik. Ibu Sari tidak hanya fokus pada produksi, tetapi juga edukasi wisatawan tentang proses budidaya strawberry yang ramah lingkungan. Beliau juga mengembangkan produk olahan strawberry seperti selai, sirup, dan keripik strawberry.",
          specialties: ["Strawberry Organik", "Agrowisata", "Produk Olahan"],
          experience: "19+ tahun",
          contact: {
            phone: "+62 812-3456-7892",
            whatsapp: "+6281234567892",
          },
        },
        ahmad: {
          name: "Pak Ahmad Hakim",
          location: "Subang, Jawa Barat",
          image: "assets/images/pak_ahmad.png",
          fullBio:
            "Pak Ahmad Hakim adalah spesialis budidaya padi organik premium yang telah malang melintang di dunia pertanian selama 30 tahun. Beliau memulai transisi ke pertanian organik pada tahun 2010 setelah melihat potensi besar pasar beras organik. Dengan lahan persawahan seluas 10 hektar, Pak Ahmad mengembangkan berbagai varietas padi lokal unggul seperti Ciherang, Inpari, dan varietas lokal Subang. Beliau juga menerapkan sistem pertanian terpadu dengan budidaya ikan di sawah (mina padi) yang meningkatkan produktivitas dan keberlanjutan ekosistem.",
          specialties: ["Padi Organik", "Mina Padi", "Varietas Lokal"],
          experience: "30+ tahun",
          contact: {
            phone: "+62 812-3456-7893",
            whatsapp: "+6281234567893",
          },
        },
      };

      // Chatbot responses
      const chatbotResponses = {
        halo: "Halo! Senang bertemu dengan Anda. Bagaimana saya bisa membantu Anda hari ini?",
        produk:
          "Kami menyediakan berbagai produk organik segar seperti buah-buahan, sayuran, beras premium, dan produk olahan. Produk mana yang Anda cari?",
        harga:
          "Harga produk kami bervariasi tergantung jenis dan musim. Untuk informasi harga terkini, silakan hubungi tim kami di +62 812-3456-7890.",
        pengiriman:
          "Kami melayani pengiriman ke seluruh Jawa Barat dengan sistem cold chain untuk menjaga kesegaran produk. Estimasi pengiriman 1-2 hari kerja.",
        agrowisata:
          "Kami menawarkan berbagai paket agrowisata seperti farm tour, strawberry picking, dan workshop pertanian organik. Tertarik dengan paket yang mana?",
        default:
          "Terima kasih atas pertanyaan Anda. Tim customer service kami akan segera membantu Anda. Silakan hubungi +62 812-3456-7890 untuk bantuan lebih lanjut.",
      };

      // Mobile Menu Toggle
      const mobileMenuBtn = document.getElementById("mobile-menu-btn");
      const mobileMenu = document.getElementById("mobile-menu");

      mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });

      // WhatsApp Integration
      const bookExperienceBtn = document.getElementById("book-experience-btn");
      bookExperienceBtn.addEventListener("click", () => {
        const message = encodeURIComponent(
          "Halo! Saya tertarik dengan Pengalaman Panen Stroberi Premium. Bisakah Anda memberikan informasi lebih lanjut?"
        );
        const whatsappUrl = `https://wa.me/6281234567890?text=${message}`;
        window.open(whatsappUrl, "_blank");
      });

      // Initialize OpenStreetMap
      let map;
      let markers = {};

      function initMap() {
        // Initialize map centered on West Java
        map = L.map("map").setView([-6.9175, 107.6191], 8);

        // Add OpenStreetMap tiles
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(map);

        // Define marker data
        const markerData = {
          "kebun-buah": [
            {
              lat: -6.8,
              lng: 107.5,
              name: "Kebun Apel Malang",
              type: "kebun-buah",
            },
            {
              lat: -6.9,
              lng: 107.7,
              name: "Kebun Strawberry Ciwidey",
              type: "kebun-buah",
            },
          ],
          "wisata-kopi": [
            {
              lat: -6.7,
              lng: 107.6,
              name: "Wisata Kopi Lembang",
              type: "wisata-kopi",
            },
            {
              lat: -7.0,
              lng: 107.8,
              name: "Kebun Kopi Pangalengan",
              type: "wisata-kopi",
            },
          ],
          "pertanian-organik": [
            {
              lat: -6.6,
              lng: 107.4,
              name: "Farm Organik Subang",
              type: "pertanian-organik",
            },
            {
              lat: -7.1,
              lng: 107.9,
              name: "Pertanian Organik Garut",
              type: "pertanian-organik",
            },
          ],
          "wisata-sawah": [
            {
              lat: -6.5,
              lng: 107.3,
              name: "Wisata Sawah Jatiluhur",
              type: "wisata-sawah",
            },
            {
              lat: -7.2,
              lng: 108.0,
              name: "Sawah Terasering Kuningan",
              type: "wisata-sawah",
            },
          ],
        };

        // Color mapping for different types
        const colors = {
          "kebun-buah": "#22c55e",
          "wisata-kopi": "#f97316",
          "pertanian-organik": "#fbbf24",
          "wisata-sawah": "#3b82f6",
        };

        // Add markers to map
        Object.keys(markerData).forEach((type) => {
          markers[type] = [];
          markerData[type].forEach((location) => {
            const marker = L.circleMarker([location.lat, location.lng], {
              color: colors[type],
              fillColor: colors[type],
              fillOpacity: 0.8,
              radius: 8,
            }).addTo(map);

            marker.bindPopup(location.name);
            markers[type].push(marker);
          });
        });

        // Show only kebun-buah markers initially
        showMarkersForType("kebun-buah");
      }

      function showMarkersForType(activeType) {
        Object.keys(markers).forEach((type) => {
          markers[type].forEach((marker) => {
            if (type === activeType) {
              marker.addTo(map);
            } else {
              map.removeLayer(marker);
            }
          });
        });
      }

      // Map Filter Functionality
      const filterBtns = document.querySelectorAll(".filter-btn");

      filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          // Remove active class from all buttons
          filterBtns.forEach((b) => {
            b.classList.remove("active", "bg-primary", "text-white");
            b.classList.add("bg-white", "text-gray-700");
          });

          // Add active class to clicked button
          btn.classList.add("active", "bg-primary", "text-white");
          btn.classList.remove("bg-white", "text-gray-700");

          const filter = btn.dataset.filter;
          showMarkersForType(filter);
        });
      });

      // Recipe Modal Functionality
      const recipeModal = document.getElementById("recipe-modal");
      const recipeModalTitle = document.getElementById("recipe-modal-title");
      const recipeModalContent = document.getElementById(
        "recipe-modal-content"
      );
      const closeRecipeModal = document.getElementById("close-recipe-modal");
      const recipeButtons = document.querySelectorAll(".recipe-btn");

      recipeButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const recipeId = btn.dataset.recipe;
          const recipe = recipes[recipeId];

          if (recipe) {
            recipeModalTitle.textContent = recipe.title;

            recipeModalContent.innerHTML = `
                        <div class="space-y-6">
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-3">Bahan-bahan:</h3>
                                <ul class="space-y-1">
                                    ${recipe.ingredients
                                      .map(
                                        (ingredient) =>
                                          `<li class="text-gray-600">• ${ingredient}</li>`
                                      )
                                      .join("")}
                                </ul>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-3">Cara Membuat:</h3>
                                <ol class="space-y-2">
                                    ${recipe.instructions
                                      .map(
                                        (instruction, index) =>
                                          `<li class="text-gray-600">${
                                            index + 1
                                          }. ${instruction}</li>`
                                      )
                                      .join("")}
                                </ol>
                            </div>
                        </div>
                    `;

            recipeModal.classList.remove("hidden");
            recipeModal.classList.add("flex");
            document.body.style.overflow = "hidden";
          }
        });
      });

      closeRecipeModal.addEventListener("click", () => {
        recipeModal.classList.add("hidden");
        recipeModal.classList.remove("flex");
        document.body.style.overflow = "auto";
      });

      // Farmer Profile Modal Functionality
      const farmerModal = document.getElementById("farmer-modal");
      const farmerModalTitle = document.getElementById("farmer-modal-title");
      const farmerModalContent = document.getElementById(
        "farmer-modal-content"
      );
      const closeFarmerModal = document.getElementById("close-farmer-modal");
      const learnMoreButtons = document.querySelectorAll(".learn-more-btn");

      learnMoreButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const farmerId = btn.dataset.farmer;
          const farmer = farmers[farmerId];

          if (farmer) {
            farmerModalTitle.textContent = farmer.name;

            farmerModalContent.innerHTML = `
                        <div class="space-y-6">
                            <div class="flex flex-col md:flex-row gap-6">
                                <div class="md:w-1/3">
                                    <img src="${farmer.image}" alt="${
              farmer.name
            }" class="w-full h-64 object-cover rounded-lg">
                                </div>
                                <div class="md:w-2/3">
                                    <div class="mb-4">
                                        <h3 class="text-lg font-semibold text-gray-800 mb-2">Lokasi</h3>
                                        <p class="text-primary font-medium">${
                                          farmer.location
                                        }</p>
                                    </div>
                                    <div class="mb-4">
                                        <h3 class="text-lg font-semibold text-gray-800 mb-2">Pengalaman</h3>
                                        <p class="text-gray-600">${
                                          farmer.experience
                                        }</p>
                                    </div>
                                    <div class="mb-4">
                                        <h3 class="text-lg font-semibold text-gray-800 mb-2">Spesialisasi</h3>
                                        <div class="flex flex-wrap gap-2">
                                            ${farmer.specialties
                                              .map(
                                                (specialty) =>
                                                  `<span class="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">${specialty}</span>`
                                              )
                                              .join("")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-3">Profil Lengkap</h3>
                                <p class="text-gray-600 leading-relaxed">${
                                  farmer.fullBio
                                }</p>
                            </div>
                            <div class="flex gap-4 pt-4 border-t">
                                <a href="tel:${
                                  farmer.contact.phone
                                }" class="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
                                    <i class="fas fa-phone mr-2"></i>Telepon
                                </a>
                                <a href="https://wa.me/${farmer.contact.whatsapp.replace(
                                  "+",
                                  ""
                                )}" target="_blank" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
                                    <i class="fab fa-whatsapp mr-2"></i>WhatsApp
                                </a>
                            </div>
                        </div>
                    `;

            farmerModal.classList.remove("hidden");
            farmerModal.classList.add("flex");
            document.body.style.overflow = "hidden";
          }
        });
      });

      closeFarmerModal.addEventListener("click", () => {
        farmerModal.classList.add("hidden");
        farmerModal.classList.remove("flex");
        document.body.style.overflow = "auto";
      });

      // Video Story Modal Functionality
      const videoModal = document.getElementById("video-modal");
      const closeVideoModal = document.getElementById("close-video-modal");
      const watchStoryBtn = document.getElementById("watch-story-btn");
      const heroWatchStory = document.getElementById("hero-watch-story");

      [watchStoryBtn, heroWatchStory].forEach((btn) => {
        btn.addEventListener("click", () => {
          videoModal.classList.remove("hidden");
          videoModal.classList.add("flex");
          document.body.style.overflow = "hidden";
        });
      });

      closeVideoModal.addEventListener("click", () => {
        videoModal.classList.add("hidden");
        videoModal.classList.remove("flex");
        document.body.style.overflow = "auto";
      });

      // Chatbot Modal Functionality
      const chatbotBtn = document.getElementById("chatbot-btn");
      const chatbotModal = document.getElementById("chatbot-modal");
      const closeChatbotModal = document.getElementById("close-chatbot-modal");
      const chatMessages = document.getElementById("chat-messages");
      const chatInput = document.getElementById("chat-input");
      const sendMessage = document.getElementById("send-message");

      chatbotBtn.addEventListener("click", () => {
        chatbotModal.classList.remove("hidden");
        chatbotModal.classList.add("flex");
        document.body.style.overflow = "hidden";
        chatInput.focus();
      });

      closeChatbotModal.addEventListener("click", () => {
        chatbotModal.classList.add("hidden");
        chatbotModal.classList.remove("flex");
        document.body.style.overflow = "auto";
      });

      function addMessage(message, isUser = false) {
        const messageDiv = document.createElement("div");
        messageDiv.className = `flex items-start space-x-2 ${
          isUser ? "justify-end" : ""
        }`;

        if (isUser) {
          messageDiv.innerHTML = `
                    <div class="bg-primary text-white p-3 rounded-lg shadow-sm max-w-xs">
                        <p class="text-sm">${message}</p>
                    </div>
                    <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                        <i class="fas fa-user text-gray-600 text-xs"></i>
                    </div>
                `;
        } else {
          messageDiv.innerHTML = `
                    <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <i class="fas fa-leaf text-white text-xs"></i>
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

        if (message.includes("halo") || message.includes("hai")) {
          return chatbotResponses.halo;
        } else if (
          message.includes("produk") ||
          message.includes("buah") ||
          message.includes("sayur")
        ) {
          return chatbotResponses.produk;
        } else if (message.includes("harga") || message.includes("biaya")) {
          return chatbotResponses.harga;
        } else if (
          message.includes("kirim") ||
          message.includes("pengiriman") ||
          message.includes("delivery")
        ) {
          return chatbotResponses.pengiriman;
        } else if (
          message.includes("agrowisata") ||
          message.includes("wisata") ||
          message.includes("tour")
        ) {
          return chatbotResponses.agrowisata;
        } else {
          return chatbotResponses.default;
        }
      }

      function sendChatMessage() {
        const message = chatInput.value.trim();
        if (message) {
          addMessage(message, true);
          chatInput.value = "";

          // Simulate bot response delay
          setTimeout(() => {
            const botResponse = getBotResponse(message);
            addMessage(botResponse, false);
          }, 1000);
        }
      }

      sendMessage.addEventListener("click", sendChatMessage);

      chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          sendChatMessage();
        }
      });

      // Close modals when clicking outside
      [recipeModal, farmerModal, videoModal, chatbotModal].forEach((modal) => {
        modal.addEventListener("click", (e) => {
          if (e.target === modal) {
            modal.classList.add("hidden");
            modal.classList.remove("flex");
            document.body.style.overflow = "auto";
          }
        });
      });

      // Close modals with Escape key
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          [recipeModal, farmerModal, videoModal, chatbotModal].forEach(
            (modal) => {
              if (!modal.classList.contains("hidden")) {
                modal.classList.add("hidden");
                modal.classList.remove("flex");
                document.body.style.overflow = "auto";
              }
            }
          );
        }
      });

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            // Close mobile menu if open
            mobileMenu.classList.add("hidden");
          }
        });
      });

      // Add scroll effect to navbar
      window.addEventListener("scroll", () => {
        const nav = document.querySelector("nav");
        if (window.scrollY > 100) {
          nav.classList.add("bg-white/95");
          nav.classList.remove("bg-white/90");
        } else {
          nav.classList.add("bg-white/90");
          nav.classList.remove("bg-white/95");
        }
      });

      // Initialize map when page loads
      document.addEventListener("DOMContentLoaded", () => {
        initMap();
      });