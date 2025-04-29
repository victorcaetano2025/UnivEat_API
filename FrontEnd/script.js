// Dados do cardápio
const menuItems = [
    {
      id: 1,
      name: "Suco de Laranja",
      description: "Uma bebida gelada, saborosa e natural.",
      price: 28.9,
      image:
        "https://images.unsplash.com/photo-1650547001322-145ff2c0bed7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "bebidas",
    },
    {
      id: 2,
      name: "Açai 500Ml",
      description: "Açai delicioso, com diversas opções de personalização.",
      price: 42.9,
      image:
        "https://images.unsplash.com/photo-1583238620415-1e363e11aedf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "sobremesas",
    },
    {
      id: 3,
      name: "Coca-Cola",
      description: "Bebida gasificada sabor Coca-Cola.",
      price: 54.9,
      image:
        "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "bebidas",
    },
    {
      id: 4,
      name: "Pão de Queijo",
      description: "Com uma massa deliciosa e fresca, derretendo a cada mordida.",
      price: 78.9,
      image:
        "https://images.pexels.com/photos/20450299/pexels-photo-20450299/free-photo-of-brazilian-cheese-bread-in-the-oven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "salgados",
    },
    {
      id: 5,
      name: "Coxinha",
      description: "Salgado com frango e massa leve. Levando um toque de sabor macio.",
      price: 68.9,
      image:
        "https://images.pexels.com/photos/31724197/pexels-photo-31724197/free-photo-of-delicious-brazilian-coxinha-appetizers-in-tray.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "salgados",
    },
    {
      id: 6,
      name: "Doce de chocolate",
      description: "Pequeno e requintado pedaço de Chocolate, misturado com cacau 70% e leite condesado.",
      price: 72.9,
      image:
        "https://images.pexels.com/photos/31731620/pexels-photo-31731620/free-photo-of-delicious-chocolate-cake-with-icing-on-glass-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "sobremesas",
    },
    {
      id: 7,
      name: "Cachorro Quente",
      description: "Massa fresca com molho cremoso de queijo, finalizado com frango grelhado e manjericão.",
      price: 58.9,
      image:
        "https://images.pexels.com/photos/3023479/pexels-photo-3023479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "salgados",
    },
    {
      id: 8,
      name: "Bolo de Chocolate",
      description: "Bolo quente de chocolate com centro derretido, servido com sorvete de creme.",
      price: 32.9,
      image:
        "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      category: "sobremesas",
    },
    {
      id: 9,
      name: "Cheesecake de Frutas Vermelhas",
      description: "Torta cremosa de cream cheese com cobertura de calda de frutas vermelhas.",
      price: 28.9,
      image:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      category: "sobremesas",
    },
    {
      id: 10,
      name: "Pave",
      description: "Sobremesa italiana com camadas de biscoito champagne, café, queijo mascarpone e cacau.",
      price: 30.9,
      image:
        "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "sobremesas",
    },
    {
      id: 11,
      name: "Agua com Gás",
      description: "Bebida natural H2O gasificada.",
      price: 120.0,
      image:
        "https://images.tcdn.com.br/img/img_prod/1023690/agua_mineral_crystal_com_gas_500_ml_com_12_7885_1_6ced39bcb78ecaf9d11e598967e15773.jpg",
      category: "bebidas",
    },
    {
      id: 12,
      name: "Pastel de Carne e Queijo",
      description: "Massa crocante. Carne moida e fresca. Queijo derretido a parmesão.",
      price: 24.9,
      image:
        "https://www.comidaereceitas.com.br/wp-content/uploads/2008/08/Pastel-paulista-freepik.jpg",
      category: "salgados",
    },
    {
      id: 13,
      name: "Gatorade",
      description: "Suco de frutas frescas. Contendo gás e taurina.",
      price: 14.9,
      image:
        "https://images.pexels.com/photos/18925017/pexels-photo-18925017/free-photo-of-beverages-in-fridge-in-store.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "bebidas",
    },
    {
      id: 14,
      name: "Água Mineral",
      description: "Água mineral sem gás. Garrafa 500ml.",
      price: 6.9,
      image:
        "https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      category: "bebidas",
    },
  ]
  
  // Formatar preço para o formato brasileiro
  function formatPrice(price) {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }
  
  // Renderizar itens do cardápio
  function renderMenuItems(items) {
    const menuContainer = document.getElementById("menu-items")
    menuContainer.innerHTML = ""
  
    if (items.length === 0) {
      menuContainer.innerHTML = '<div class="no-results">Nenhum item encontrado</div>'
      return
    }
  
    items.forEach((item) => {
      const menuItem = document.createElement("div")
      menuItem.className = "menu-item"
      menuItem.setAttribute("data-category", item.category)
  
      menuItem.innerHTML = `
              <div class="menu-item-image">
                  <img src="${item.image}" alt="${item.name}">
              </div>
              <div class="menu-item-content">
                  <div class="menu-item-header">
                      <h3 class="menu-item-title">${item.name}</h3>
                      <span class="menu-item-price">${formatPrice(item.price)}</span>
                  </div>
                  <p class="menu-item-description">${item.description}</p>
                  <span class="menu-item-category">${getCategoryName(item.category)}</span>
              </div>
          `
  
      menuContainer.appendChild(menuItem)
    })
  }
  
  // Obter nome da categoria em português
  function getCategoryName(category) {
    const categories = {
      entradas: "Entradas",
      principais: "Pratos Principais",
      sobremesas: "Sobremesas",
      bebidas: "Bebidas",
    }
  
    return categories[category] || category
  }
  
  // Filtrar itens por categoria
  function filterByCategory(category) {
    if (category === "todos") {
      return menuItems
    } else {
      return menuItems.filter((item) => item.category === category)
    }
  }
  
  // Filtrar itens por termo de busca
  function filterBySearchTerm(items, term) {
    if (!term) return items
  
    term = term.toLowerCase()
    return items.filter((item) => item.name.toLowerCase().includes(term) || item.description.toLowerCase().includes(term))
  }
  
  // Inicializar a página
  document.addEventListener("DOMContentLoaded", () => {
    // Renderizar todos os itens inicialmente
    renderMenuItems(menuItems)
  
    // Adicionar evento de clique aos links de categoria
    const categoryLinks = document.querySelectorAll("nav ul li a")
    categoryLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
  
        // Remover classe 'active' de todos os links
        categoryLinks.forEach((l) => l.classList.remove("active"))
  
        // Adicionar classe 'active' ao link clicado
        link.classList.add("active")
  
        // Filtrar itens pela categoria selecionada
        const category = link.getAttribute("data-category")
        const filteredItems = filterByCategory(category)
  
        // Aplicar filtro de busca, se houver
        const searchTerm = document.getElementById("search-input").value
        const searchFilteredItems = filterBySearchTerm(filteredItems, searchTerm)
  
        // Renderizar itens filtrados
        renderMenuItems(searchFilteredItems)
      })
    })
  
    // Adicionar evento de busca
    const searchButton = document.getElementById("search-button")
    const searchInput = document.getElementById("search-input")
  
    function performSearch() {
      const searchTerm = searchInput.value
  
      // Obter categoria ativa
      const activeCategory = document.querySelector("nav ul li a.active")?.getAttribute("data-category") || "todos"
  
      // Filtrar por categoria
      const categoryFilteredItems = filterByCategory(activeCategory)
  
      // Filtrar por termo de busca
      const searchFilteredItems = filterBySearchTerm(categoryFilteredItems, searchTerm)
  
      // Renderizar itens filtrados
      renderMenuItems(searchFilteredItems)
    }
  
    searchButton.addEventListener("click", performSearch)
  
    searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        performSearch()
      }
    })
  
    // Toggle menu mobile
    const menuToggle = document.getElementById("menu-toggle")
    const menuList = document.getElementById("menu-list")
  
    menuToggle.addEventListener("click", () => {
      menuList.classList.toggle("show")
    })
  
    // Fechar menu ao clicar em um item (mobile)
    menuList.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          menuList.classList.remove("show")
        }
      })
    })
  })
  