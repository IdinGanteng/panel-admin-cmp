import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Truck,
  Users,
  BarChart3,
  Settings,
  Search,
  Plus,
  Pencil,
  Trash2,
  Smartphone,
  Cable,
  Menu,
  X,
  ArrowDownToLine,
  Receipt,
  ChevronDown,
  Boxes,
  WalletCards,
  AlertTriangle,
  Minus,
  Banknote,
  Calculator
} from "lucide-react";

import "./styles.css";

/* =========================================================
   DATA PRODUK
   ========================================================= */

const seedProducts = [
  // ["PRD-000001","HP","Samsung Galaxy M23 5G 6/128","Samsung","Biru","9514",1,820000,900000],
  // ["PRD-000002","HP","Samsung A07 4/64","Samsung","Green","7253",1,820000,900000],
  // ["PRD-000003","HP","Samsung A06 4/64","Samsung","Biru","5735",1,0,0],
  // ["PRD-000004","HP","Samsung A07 4/64","Samsung","Ijo","5955",1,0,0],
  // ["PRD-000005","HP","Samsung A06 4/128","Samsung","Biru","8291",1,0,0],

  // ["PRD-000006","HP","OPPO A60 8/128","OPPO","Biru","8470",1,0,0],
  // ["PRD-000007","HP","OPPO Reno 8T 8/256","OPPO","Hitam","9771",1,0,0],
  // ["PRD-000008","HP","OPPO A18 4/128","OPPO","Biru","6895",1,0,0],
  // ["PRD-000009","HP","OPPO A6 Pro 8/256","OPPO","Biru","6815",1,0,0],
  // ["PRD-000010","HP","OPPO A95 8/128","OPPO","Hitam","9559",1,0,0],
  // ["PRD-000011","HP","OPPO F11 4/128","OPPO","Hijau","6170",1,0,0],
  // ["PRD-000012","HP","OPPO A77s 8/128","OPPO","Hitam","5519",1,0,0],
  // ["PRD-000013","HP","OPPO A5 3/64","OPPO","White","6334",1,0,0],

  // ["PRD-000014","HP","VIVO Y18 6/128","VIVO","Merah Tua","9437",1,0,0],
  // ["PRD-000015","HP","VIVO Y19s Pro 4/64","VIVO","Hitam","3557",1,0,0],
  // ["PRD-000016","HP","VIVO Y28 8/128","VIVO","Green","5951",1,0,0],
  // ["PRD-000017","HP","VIVO Y17s 6/128","VIVO","Hijau","7294",1,0,0],

  // ["PRD-000018","HP","Redmi Note 11 4/128","REDMI","Hitam","8787",1,0,0],
  // ["PRD-000019","HP","Redmi 10 4/64","REDMI","Putih","1326",1,0,0],
  // ["PRD-000020","HP","Redmi 13C 8/256","REDMI","White","4789",1,0,0],
  // ["PRD-000021","HP","Redmi 13 8/128","REDMI","Black","2427",1,0,0],
  // ["PRD-000022","HP","Redmi A3 4/128","REDMI","Biru","2721",1,0,0],
  // ["PRD-000023","HP","Redmi 12 8/128","REDMI","Biru","8321",1,0,0],

  // ["PRD-000024","HP","Realme C55 8/256","REALME","Hitam","4490",1,0,0],
  // ["PRD-000025","HP","Realme Note 60 6/128","REALME","Hitam Marmer","9276",1,0,0],
  // ["PRD-000026","HP","Realme Note 70 4/64","REALME","Black","4133",1,0,0],

  // ["PRD-000027","HP","Infinix Smart 10 4/64","INFINIX","Pice","6081",1,0,0],
  // ["PRD-000028","HP","Infinix Hot 60i 8/256","INFINIX","Biru","5543",1,0,0],
  // ["PRD-000029","HP","Infinix Smart 10 Plus 8/128","INFINIX","Silver","5769",1,0,0],
  // ["PRD-000030","HP","Infinix Hot 30i 8/128","INFINIX","Blue","3244",1,0,0],
  // ["PRD-000031","HP","Infinix Hot 50 8/256","INFINIX","Black","6269",1,0,0],
  // ["PRD-000032","HP","Infinix Hot 30","INFINIX","Black","3460",1,0,0],
  // ["PRD-000033","HP","Infinix Hot 11 4/64","INFINIX","Silver","1482",1,0,0],
  // ["PRD-000034","HP","Infinix Hot 50i 6/128","INFINIX","Titanium Grey","8999",1,0,0],
  // ["PRD-000035","HP","Infinix Hot 50i 6/128","INFINIX","Black","1828",1,0,0],

  // ["PRD-000036","HP","Tecno Spark 20 Pro 8/256","TECNO","Hitam","1286",1,0,0],
  // ["PRD-000037","HP","Tecno Spark 40 6/128","TECNO","Black","8023",1,0,0],

  // ["PRD-000038","HP","POCO C71 4/128","POCO","Gold","2547",1,0,0],
  // ["PRD-000039","HP","POCO C71 4/128","POCO","Gold","3124",1,0,0],

  // ["PRD-000040","HP","Advan Extab 4/64","ADVAN","Grey","4864",1,0,0],
  // ["PRD-000041","HP","Itel Vista Tab10 Mini 3+5/64","ITEL","Deep Gray","5387",1,0,0],

  /* ================= AKSESORIS ================= */

  ["PRD-000042","CHARGER","Charger Fast Charging 20W","OEM","Putih","",20,35000,55000],
  ["PRD-000043","KABEL","Kabel Data Type-C 1 Meter","OEM","Putih","",50,8000,15000],
  ["PRD-000044","KABEL","Kabel Data Lightning 1 Meter","OEM","Putih","",25,10000,20000],
  ["PRD-000045","HEADSET","Headset Bluetooth","OEM","Hitam","",12,45000,75000],
  ["PRD-000046","POWERBANK","Powerbank 10.000 mAh","OEM","Hitam","",8,75000,110000],
  ["PRD-000047","CASE","Casing Universal","OEM","Clear","",30,5000,12000],
  ["PRD-000048","TEMPERED","Tempered Glass Universal","OEM","Clear","",40,3000,10000]
].map(x => ({
  id: x[0],
  category_id: x[1],
  name: x[2],
  brand: x[3],
  color: x[4],
  serial: x[5],
  stock: Number(x[6]) || 0,

  purchase_price: Number(x[7]) || 0,
  selling_price: Number(x[8]) || 0,

  type: x[1] === "HP" ? "serialized" : "simple",
  condition: x[1] === "HP" ? "Bekas" : "Baru",

  location: "Etalase",
  status: "active",
  unit: x[1] === "HP" ? "unit" : "pcs"
}));

/* =========================================================
   KATEGORI
   ========================================================= */

const cats = [
  ["ALL", "Semua"],
  ["HP", "Handphone"],
  ["CHARGER", "Charger"],
  ["KABEL", "Kabel Data"],
  ["HEADSET", "Headset"],
  ["POWERBANK", "Powerbank"],
  ["CASE", "Casing"],
  ["TEMPERED", "Tempered Glass"],
  ["AKSESORIS", "Aksesoris"],
  ["PULSA", "Pulsa"],
  ["LAINNYA", "Lainnya"]
];

/* =========================================================
   FORMAT UANG
   ========================================================= */

const money = value =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(Number(value) || 0);


/* =========================================================
   APP
   ========================================================= */

function App() {

  const [page, setPage] = useState("dashboard");

  const [products, setProducts] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("pos_products")
      ) || seedProducts;
    } catch {
      return seedProducts;
    }
  });

  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("ALL");

  const [modal, setModal] = useState(null);

  const [cart, setCart] = useState([]);

  const [mobileNav, setMobileNav] = useState(false);

  const [toast, setToast] = useState("");

  /* =======================================================
     SIMPAN PRODUK
     ======================================================= */

  const save = next => {

    setProducts(next);

    localStorage.setItem(
      "pos_products",
      JSON.stringify(next)
    );

  };


  /* =======================================================
     NOTIFIKASI
     ======================================================= */

  const notify = message => {

    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 1800);

  };


  /* =======================================================
     FILTER PRODUK
     ======================================================= */

  const filtered = useMemo(() => {

    const keyword = query.toLowerCase();

    return products.filter(p => {

      const categoryMatch =
        cat === "ALL" ||
        p.category_id === cat;

      const searchText = [
        p.name,
        p.brand,
        p.sku,
        p.serial,
        p.color
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return (
        categoryMatch &&
        searchText.includes(keyword)
      );

    });

  }, [products, cat, query]);


  /* =======================================================
     TAMBAH KE KERANJANG
     ======================================================= */

  const addCart = product => {

    if (Number(product.stock) <= 0) {
      notify("Stok produk habis");
      return;
    }

    if (Number(product.selling_price) <= 0) {

      notify(
        "Harga jual produk belum diisi"
      );

      setModal(product);

      return;
    }

    setCart(currentCart => {

      const existing = currentCart.find(
        item => item.id === product.id
      );

      if (existing) {

        if (existing.qty >= Number(product.stock)) {

          notify("Jumlah melebihi stok");

          return currentCart;
        }

        return currentCart.map(item =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + 1
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          qty: 1
        }
      ];

    });

    notify("Produk ditambahkan ke keranjang");

  };


  /* =======================================================
     UBAH QTY
     ======================================================= */

  const changeQty = (id, amount) => {

    setCart(currentCart => {

      return currentCart
        .map(item => {

          if (item.id !== id) {
            return item;
          }

          const newQty =
            item.qty + amount;

          if (newQty <= 0) {
            return null;
          }

          if (newQty > Number(item.stock)) {

            notify("Jumlah melebihi stok");

            return item;
          }

          return {
            ...item,
            qty: newQty
          };

        })
        .filter(Boolean);

    });

  };


  /* =======================================================
     HAPUS ITEM KERANJANG
     ======================================================= */

  const removeCartItem = id => {

    setCart(current =>
      current.filter(item => item.id !== id)
    );

  };


  /* =======================================================
     TOTAL KERANJANG
     ======================================================= */

  const cartSubtotal = cart.reduce(
    (total, item) =>
      total +
      Number(item.selling_price || 0) *
      Number(item.qty || 0),
    0
  );


  /* =======================================================
     CHECKOUT
     ======================================================= */

  const checkout = () => {

    if (!cart.length) {

      notify("Keranjang masih kosong");

      return;
    }

    const total = cartSubtotal;

    const nextProducts = products.map(product => {

      const item = cart.find(
        cartItem =>
          cartItem.id === product.id
      );

      if (!item) {
        return product;
      }

      return {
        ...product,
        stock: Math.max(
          0,
          Number(product.stock) -
          Number(item.qty)
        )
      };

    });

    save(nextProducts);

    setCart([]);

    notify(
      "Transaksi berhasil • " +
      money(total)
    );

  };


  /* =======================================================
     STATISTIK
     ======================================================= */

  const stats = {

    products:
      products.length,

    stock:
      products.reduce(
        (sum, product) =>
          sum + Number(product.stock || 0),
        0
      ),

    value:
      products.reduce(
        (sum, product) =>
          sum +
          Number(product.purchase_price || 0) *
          Number(product.stock || 0),
        0
      ),

    low:
      products.filter(
        product =>
          Number(product.stock || 0) <= 2
      ).length

  };


  /* =======================================================
     NAVIGASI
     ======================================================= */

  const nav = [
    ["dashboard", "Dashboard", LayoutDashboard],
    ["inventory", "Inventory", Package],
    ["pos", "Kasir / POS", ShoppingCart],
    ["purchases", "Pembelian", Truck],
    ["customers", "Pelanggan", Users],
    ["reports", "Laporan", BarChart3],
    ["settings", "Pengaturan", Settings]
  ];


  return (

    <div className="app">

      {/* ===================================================
          SIDEBAR
      =================================================== */}

      <aside
        className={
          "sidebar " +
          (mobileNav ? "open" : "")
        }
      >

        <div className="brand">

          <div className="brandIcon">
            K
          </div>

          <div>
            <b>ARTA CELL</b>
            <small>
              Inventory & POS
            </small>
          </div>

          <button
            className="closeNav"
            onClick={() =>
              setMobileNav(false)
            }
          >
            <X size={19} />
          </button>

        </div>


        <div className="store">

          TOKO UTAMA

          <ChevronDown size={14} />

        </div>


        <nav>

          {nav.map(
            ([id, label, Icon]) => (

              <button
                key={id}
                className={
                  page === id
                    ? "active"
                    : ""
                }
                onClick={() => {

                  setPage(id);

                  setMobileNav(false);

                }}
              >

                <Icon size={19} />

                <span>
                  {label}
                </span>

              </button>

            )
          )}

        </nav>


        <div className="sideBottom">

          <div className="userAvatar">
            A
          </div>

          <div>
            <b>Administrator</b>
            <small>Admin</small>
          </div>

        </div>

      </aside>


      {mobileNav && (
        <div
          className="overlay"
          onClick={() =>
            setMobileNav(false)
          }
        />
      )}


      {/* ===================================================
          MAIN
      =================================================== */}

      <main className="main">

        <header>

          <button
            className="menuBtn"
            onClick={() =>
              setMobileNav(true)
            }
          >
            <Menu />
          </button>


          <div>

            <h1>
              {
                nav.find(
                  x => x[0] === page
                )?.[1]
              }
            </h1>

            <p>
              Kelola toko dengan cepat dan rapi.
            </p>

          </div>


          <div className="headerRight">

            <div className="date">
              12 September 2026
            </div>

            <div className="avatar">
              A
            </div>

          </div>

        </header>


        {/* =================================================
            DASHBOARD
        ================================================= */}

        {page === "dashboard" && (

          <Dashboard
            stats={stats}
            products={products}
            money={money}
            setPage={setPage}
          />

        )}


        {/* =================================================
            INVENTORY
        ================================================= */}

        {page === "inventory" && (

          <Inventory
            products={filtered}
            all={products}
            query={query}
            setQuery={setQuery}
            cat={cat}
            setCat={setCat}
            cats={cats}
            setModal={setModal}
            save={save}
            money={money}
            addCart={addCart}
          />

        )}


        {/* =================================================
            POS
        ================================================= */}

        {page === "pos" && (

          <POS
            products={products}
            cart={cart}
            setCart={setCart}
            addCart={addCart}
            changeQty={changeQty}
            removeCartItem={removeCartItem}
            checkout={checkout}
            query={query}
            setQuery={setQuery}
            money={money}
          />

        )}


        {page === "purchases" && (

          <Placeholder
            title="Pembelian"
            icon={Truck}
            text="Modul pembelian siap dikembangkan."
          />

        )}


        {page === "customers" && (

          <Placeholder
            title="Pelanggan"
            icon={Users}
            text="Kelola pelanggan dan riwayat transaksi."
          />

        )}


        {page === "reports" && (

          <Reports
            products={products}
            money={money}
          />

        )}


        {page === "settings" && (

          <Placeholder
            title="Pengaturan"
            icon={Settings}
            text="Pengaturan toko, pajak, struk, pengguna, dan backup data."
          />

        )}


        <footer>
          Konter HP POS • Frontend Vite + React
        </footer>

      </main>


      {/* ===================================================
          MODAL PRODUK
      =================================================== */}

      {modal && (

        <ProductModal
          product={
            modal === "new"
              ? null
              : modal
          }

          close={() =>
            setModal(null)
          }

          save={product => {

            if (modal === "new") {

              const newId =
                "PRD-" +
                String(
                  products.length + 1
                ).padStart(6, "0");

              save([
                {
                  ...product,
                  id: newId,
                  status: "active",
                  location: "Etalase"
                },
                ...products
              ]);

              notify(
                "Produk berhasil ditambahkan"
              );

            } else {

              save(
                products.map(
                  product =>
                    product.id === modal.id
                      ? product
                      : product
                )
              );

              notify(
                "Produk berhasil diperbarui"
              );

            }

            setModal(null);

          }}
        />

      )}


      {/* ===================================================
          TOAST
      =================================================== */}

      {toast && (
        <div className="toast">
          {toast}
        </div>
      )}

    </div>

  );
}


/* =========================================================
   DASHBOARD
   ========================================================= */

function Dashboard({
  stats,
  products,
  money,
  setPage
}) {

  const cards = [

    [
      "Total Produk",
      stats.products,
      Package,
      "blue"
    ],

    [
      "Total Stok",
      stats.stock,
      Boxes,
      "violet"
    ],

    [
      "Nilai Persediaan",
      money(stats.value),
      WalletCards,
      "green"
    ],

    [
      "Stok Perlu Dicek",
      stats.low,
      AlertTriangle,
      "orange"
    ]

  ];


  return (

    <section>

      <div className="welcome">

        <div>

          <span className="eyebrow">
            RINGKASAN TOKO
          </span>

          <h2>
            Selamat datang 👋
          </h2>

          <p>
            Pantau inventory dan transaksi dari satu tempat.
          </p>

        </div>


        <button
          className="primary"
          onClick={() =>
            setPage("pos")
          }
        >

          <ShoppingCart size={17} />

          Buka Kasir

        </button>

      </div>


      <div className="statGrid">

        {cards.map(
          ([title, value, Icon, color]) => (

            <div
              className="stat"
              key={title}
            >

              <div
                className={
                  "statIcon " + color
                }
              >

                <Icon size={20} />

              </div>


              <div>

                <span>
                  {title}
                </span>

                <strong>
                  {value}
                </strong>

              </div>

            </div>

          )
        )}

      </div>


      <div className="grid2">

        <div className="panel">

          <div className="panelHead">

            <div>

              <h3>
                Inventory Terbaru
              </h3>

              <p>
                Produk yang sedang tersedia
              </p>

            </div>


            <button
              className="textBtn"
              onClick={() =>
                setPage("inventory")
              }
            >
              Lihat semua →
            </button>

          </div>


          <div className="miniTable">

            {products
              .slice(0, 6)
              .map(product => (

                <div
                  className="miniRow"
                  key={product.id}
                >

                  <div className="productIcon">

                    {product.category_id === "HP"
                      ? <Smartphone size={18} />
                      : <Cable size={18} />
                    }

                  </div>


                  <div className="prodName">

                    <b>
                      {product.name}
                    </b>

                    <span>
                      {product.brand}
                      {" • "}
                      {product.serial ||
                        product.id}
                    </span>

                  </div>


                  <strong>
                    {product.stock} {product.unit}
                  </strong>


                  <span className="price">

                    {money(
                      product.selling_price
                    )}

                  </span>

                </div>

              ))}

          </div>

        </div>


        <div className="panel quick">

          <div className="panelHead">

            <div>

              <h3>
                Aksi Cepat
              </h3>

              <p>
                Operasional toko
              </p>

            </div>

          </div>


          <button
            onClick={() =>
              setPage("pos")
            }
          >

            <ShoppingCart />

            <span>

              <b>
                Transaksi Baru
              </b>

              <small>
                Buat penjualan di kasir
              </small>

            </span>

            <ChevronDown />

          </button>


          <button
            onClick={() =>
              setPage("inventory")
            }
          >

            <Plus />

            <span>

              <b>
                Tambah Produk
              </b>

              <small>
                Masukkan barang baru
              </small>

            </span>

            <ChevronDown />

          </button>


          <button
            onClick={() =>
              setPage("purchases")
            }
          >

            <ArrowDownToLine />

            <span>

              <b>
                Stok Masuk
              </b>

              <small>
                Catat pembelian barang
              </small>

            </span>

            <ChevronDown />

          </button>

        </div>

      </div>

    </section>

  );

}


/* =========================================================
   INVENTORY
   ========================================================= */

function Inventory({
  products,
  all,
  query,
  setQuery,
  cat,
  setCat,
  cats,
  setModal,
  save,
  money,
  addCart
}) {

  const remove = id => {

    if (
      !confirm(
        "Hapus produk ini?"
      )
    ) {
      return;
    }

    save(
      all.filter(
        product =>
          product.id !== id
      )
    );

  };


  return (

    <section>

      <div className="pageTools">

        <div>

          <h2>
            Inventory Produk
          </h2>

          <p>
            {products.length}
            {" "}
            produk ditampilkan
          </p>

        </div>


        <button
          className="primary"
          onClick={() =>
            setModal("new")
          }
        >

          <Plus size={17} />

          Tambah Produk

        </button>

      </div>


      <div className="panel filters">

        <div className="search">

          <Search size={18} />

          <input
            placeholder="Cari nama, SKU, barcode, serial..."
            value={query}
            onChange={e =>
              setQuery(
                e.target.value
              )
            }
          />

        </div>


        <div className="catScroll">

          {cats.map(
            ([id, name]) => (

              <button
                className={
                  cat === id
                    ? "selected"
                    : ""
                }
                onClick={() =>
                  setCat(id)
                }
                key={id}
              >
                {name}
              </button>

            )
          )}

        </div>

      </div>


      <div className="panel tablePanel">

        <div className="tableWrap">

          <table>

            <thead>

              <tr>

                <th>
                  Produk
                </th>

                <th>
                  Kategori
                </th>

                <th>
                  Varian / Serial
                </th>

                <th>
                  Stok
                </th>

                <th>
                  HPP
                </th>

                <th>
                  Harga Jual
                </th>

                <th>
                  Status
                </th>

                <th>
                </th>

              </tr>

            </thead>


            <tbody>

              {products.map(
                product => (

                  <tr
                    key={product.id}
                  >

                    <td>

                      <div className="tableProduct">

                        <div className="productIcon">

                          {product.category_id === "HP"
                            ? <Smartphone size={18} />
                            : <Cable size={18} />
                          }

                        </div>


                        <div>

                          <b>
                            {product.name}
                          </b>

                          <span>
                            {product.brand}
                            {" • "}
                            {product.id}
                          </span>

                        </div>

                      </div>

                    </td>


                    <td>

                      <span className="pill">
                        {product.category_id}
                      </span>

                    </td>


                    <td>

                      {product.serial ? (

                        <>
                          <b>
                            {product.color}
                          </b>

                          <small className="block">
                            Serial: {product.serial}
                          </small>
                        </>

                      ) : (

                        product.color

                      )}

                    </td>


                    <td>

                      <b
                        className={
                          product.stock <= 2
                            ? "stockLow"
                            : ""
                        }
                      >
                        {product.stock}
                      </b>

                      {" "}
                      {product.unit}

                    </td>


                    <td>

                      {money(
                        product.purchase_price
                      )}

                    </td>


                    <td>

                      <b>
                        {product.selling_price > 0
                          ? money(
                              product.selling_price
                            )
                          : "Belum diisi"
                        }
                      </b>

                    </td>


                    <td>

                      <span className="status">
                        Aktif
                      </span>

                    </td>


                    <td>

                      <div className="actions">

                        <button
                          title="Jual"
                          onClick={() =>
                            addCart(product)
                          }
                        >

                          <ShoppingCart
                            size={16}
                          />

                        </button>


                        <button
                          title="Edit"
                          onClick={() =>
                            setModal(product)
                          }
                        >

                          <Pencil
                            size={16}
                          />

                        </button>


                        <button
                          title="Hapus"
                          onClick={() =>
                            remove(
                              product.id
                            )
                          }
                        >

                          <Trash2
                            size={16}
                          />

                        </button>

                      </div>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </section>

  );

}


/* =========================================================
   POS / KASIR
   ========================================================= */

function POS({
  products,
  cart,
  setCart,
  addCart,
  changeQty,
  removeCartItem,
  checkout,
  query,
  setQuery,
  money
}) {

  const [cat, setCat] =
    useState("ALL");

  const [discount, setDiscount] =
    useState(0);

  const [cash, setCash] =
    useState("");


  const posCats = [
    ["ALL", "Semua"],
    ["HP", "HP"],
    ["CHARGER", "Charger"],
    ["KABEL", "Kabel"],
    ["CASE", "Casing"],
    ["TEMPERED", "Tempered"],
    ["HEADSET", "Headset"],
    ["POWERBANK", "Powerbank"]
  ];


  const list = products.filter(
    product =>
      (
        cat === "ALL" ||
        product.category_id === cat
      ) &&
      product.name
        .toLowerCase()
        .includes(
          query.toLowerCase()
        )
  );


  /* =======================================================
     HITUNG SUBTOTAL
     ======================================================= */

  const subtotal =
    cart.reduce(
      (sum, item) =>
        sum +
        Number(item.selling_price || 0) *
        Number(item.qty || 0),
      0
    );


  /* =======================================================
     DISKON
     ======================================================= */

  const discountValue =
    Math.min(
      Math.max(
        Number(discount) || 0,
        0
      ),
      subtotal
    );


  /* =======================================================
     TOTAL
     ======================================================= */

  const total =
    Math.max(
      0,
      subtotal - discountValue
    );


  /* =======================================================
     UANG DITERIMA
     ======================================================= */

  const cashValue =
    Number(cash) || 0;


  /* =======================================================
     KEMBALIAN
     ======================================================= */

  const change =
    Math.max(
      0,
      cashValue - total
    );


  const canPay =
    cart.length > 0 &&
    cashValue >= total;


  return (

    <section className="posPage">

      {/* =================================================
          PRODUK
      ================================================= */}

      <div className="posProducts">

        <div className="posTop">

          <div>

            <h2>
              Kasir
            </h2>

            <p>
              Pilih produk untuk transaksi
            </p>

          </div>


          <div className="search compact">

            <Search size={17} />

            <input
              placeholder="Cari produk..."
              value={query}
              onChange={e =>
                setQuery(
                  e.target.value
                )
              }
            />

          </div>

        </div>


        <div className="posCats">

          {posCats.map(
            ([id, name]) => (

              <button
                className={
                  cat === id
                    ? "selected"
                    : ""
                }
                onClick={() =>
                  setCat(id)
                }
                key={id}
              >
                {name}
              </button>

            )
          )}

        </div>


        <div className="productGrid">

          {list.map(product => (

            <button
              className="productCard"
              key={product.id}
              onClick={() =>
                addCart(product)
              }
            >

              <div className="bigProductIcon">

                {product.category_id === "HP"
                  ? <Smartphone />
                  : <Cable />
                }

              </div>


              <b>
                {product.name}
              </b>


              <span>

                {product.stock}
                {" "}
                {product.unit}
                {" "}
                tersedia

              </span>


              <strong>

                {product.selling_price > 0
                  ? money(
                      product.selling_price
                    )
                  : "Harga belum diisi"
                }

              </strong>

            </button>

          ))}

        </div>

      </div>


      {/* =================================================
          KERANJANG
      ================================================= */}

      <aside className="cart">

        <div className="cartHead">

          <div>

            <h3>
              Keranjang
            </h3>

            <span>
              {
                cart.reduce(
                  (sum, item) =>
                    sum + item.qty,
                  0
                )
              }
              {" "}
              item
            </span>

          </div>


          <button
            onClick={() =>
              setCart([])
            }
          >
            Kosongkan
          </button>

        </div>


        {/* ===============================================
            ITEM KERANJANG
        =============================================== */}

        {cart.length ? (

          <div className="cartItems">

            {cart.map(item => {

              const itemSubtotal =
                Number(
                  item.selling_price || 0
                ) *
                Number(
                  item.qty || 0
                );


              return (

                <div
                  className="cartItem"
                  key={item.id}
                >

                  <div className="cartProduct">

                    <b>
                      {item.name}
                    </b>


                    <span>

                      {money(
                        item.selling_price
                      )}

                      {" × "}

                      {item.qty}

                    </span>


                    <strong>

                      {money(
                        itemSubtotal
                      )}

                    </strong>

                  </div>


                  <div className="qty">

                    <button
                      onClick={() =>
                        changeQty(
                          item.id,
                          -1
                        )
                      }
                    >

                      <Minus
                        size={14}
                      />

                    </button>


                    <b>
                      {item.qty}
                    </b>


                    <button
                      onClick={() =>
                        changeQty(
                          item.id,
                          1
                        )
                      }
                    >

                      <Plus
                        size={14}
                      />

                    </button>

                  </div>


                  <button
                    className="removeCart"
                    onClick={() =>
                      removeCartItem(
                        item.id
                      )
                    }
                  >

                    <Trash2
                      size={15}
                    />

                  </button>

                </div>

              );

            })}

          </div>

        ) : (

          <div className="empty">

            <ShoppingCart
              size={35}
            />

            <b>
              Keranjang kosong
            </b>

            <span>
              Pilih produk di sebelah kiri
            </span>

          </div>

        )}


        {/* ===============================================
            CHECKOUT
        =============================================== */}

        <div className="checkout">

          <div>

            <span>
              Subtotal
            </span>

            <b>
              {money(subtotal)}
            </b>

          </div>


          <div className="discountRow">

            <span>
              Diskon
            </span>

            <input
              type="number"
              min="0"
              value={discount}
              onChange={e =>
                setDiscount(
                  e.target.value
                )
              }
              placeholder="0"
            />

          </div>


          <hr />


          <div className="grand">

            <span>
              Total Bayar
            </span>

            <b>
              {money(total)}
            </b>

          </div>


          {/* =============================================
              UANG DITERIMA
          ============================================= */}

          <label className="cashInput">

            <span>
              <Banknote
                size={16}
              />

              Uang Diterima
            </span>


            <input
              type="number"
              min="0"
              value={cash}
              onChange={e =>
                setCash(
                  e.target.value
                )
              }
              placeholder="Masukkan nominal..."
            />

          </label>


          {/* =============================================
              KEMBALIAN
          ============================================= */}

          <div className="changeBox">

            <div>

              <Calculator
                size={18}
              />

              <span>
                Kembalian
              </span>

            </div>


            <strong>
              {money(change)}
            </strong>

          </div>


          <button
            className="pay"
            disabled={!canPay}
            onClick={() => {

              checkout();

              setCash("");

              setDiscount(0);

            }}
          >

            <Receipt
              size={18}
            />

            Bayar Sekarang

          </button>


          {cart.length > 0 &&
            cashValue < total && (

              <small className="paymentWarning">

                Uang diterima kurang
                {" "}
                {money(
                  total - cashValue
                )}

              </small>

            )}

        </div>

      </aside>

    </section>

  );

}


/* =========================================================
   LAPORAN
   ========================================================= */

function Reports({
  products,
  money
}) {

  const total =
    products.reduce(
      (sum, product) =>
        sum +
        Number(
          product.purchase_price || 0
        ) *
        Number(
          product.stock || 0
        ),
      0
    );


  const retail =
    products.reduce(
      (sum, product) =>
        sum +
        Number(
          product.selling_price || 0
        ) *
        Number(
          product.stock || 0
        ),
      0
    );


  return (

    <section>

      <div className="pageTools">

        <div>

          <h2>
            Laporan Persediaan
          </h2>

          <p>
            Ringkasan nilai inventory saat ini.
          </p>

        </div>

      </div>


      <div className="reportCards">

        <div>

          <span>
            Modal Persediaan
          </span>

          <b>
            {money(total)}
          </b>

        </div>


        <div>

          <span>
            Potensi Penjualan
          </span>

          <b>
            {money(retail)}
          </b>

        </div>


        <div>

          <span>
            Potensi Margin
          </span>

          <b>
            {money(
              retail - total
            )}
          </b>

        </div>

      </div>


      <div className="panel reportInfo">

        <BarChart3
          size={42}
        />

        <h3>
          Laporan siap dikembangkan
        </h3>

        <p>
          Hubungkan transaksi penjualan,
          pembelian, dan stock movement
          untuk laporan yang lebih lengkap.
        </p>

      </div>

    </section>

  );

}


/* =========================================================
   PLACEHOLDER
   ========================================================= */

function Placeholder({
  title,
  icon: Icon,
  text
}) {

  return (

    <section>

      <div className="pageTools">

        <div>

          <h2>
            {title}
          </h2>

          <p>
            Modul POS
          </p>

        </div>

      </div>


      <div className="panel placeholder">

        <Icon
          size={50}
        />

        <h3>
          {title}
        </h3>

        <p>
          {text}
        </p>

      </div>

    </section>

  );

}


/* =========================================================
   MODAL PRODUK
   ========================================================= */

function ProductModal({
  product,
  close,
  save
}) {

  const [p, setP] =
    useState(
      product || {
        category_id: "AKSESORIS",
        name: "",
        brand: "",
        color: "",
        serial: "",
        stock: 0,
        unit: "pcs",
        purchase_price: 0,
        selling_price: 0,
        type: "simple",
        condition: "Baru"
      }
    );


  const update = (
    key,
    value
  ) => {

    setP(current => ({
      ...current,
      [key]: value
    }));

  };


  return (

    <div className="modalBackdrop">

      <div className="modal">

        <div className="modalHead">

          <div>

            <h3>
              {product
                ? "Edit Produk"
                : "Tambah Produk"}
            </h3>

            <p>
              Data master inventory
            </p>

          </div>


          <button
            onClick={close}
          >
            <X />
          </button>

        </div>


        <div className="formGrid">

          <label>

            Nama Produk

            <input
              value={
                p.name || ""
              }
              onChange={e =>
                update(
                  "name",
                  e.target.value
                )
              }
            />

          </label>


          <label>

            Merek

            <input
              value={
                p.brand || ""
              }
              onChange={e =>
                update(
                  "brand",
                  e.target.value
                )
              }
            />

          </label>


          <label>

            Warna

            <input
              value={
                p.color || ""
              }
              onChange={e =>
                update(
                  "color",
                  e.target.value
                )
              }
            />

          </label>


          <label>

            SKU / Serial

            <input
              value={
                p.serial || ""
              }
              onChange={e =>
                update(
                  "serial",
                  e.target.value
                )
              }
            />

          </label>


          <label>

            Kategori

            <select
              value={
                p.category_id
              }
              onChange={e =>
                update(
                  "category_id",
                  e.target.value
                )
              }
            >

              {cats
                .filter(
                  x =>
                    x[0] !== "ALL"
                )
                .map(
                  ([id, name]) => (

                    <option
                      value={id}
                      key={id}
                    >
                      {name}
                    </option>

                  )
                )}

            </select>

          </label>


          <label>

            Satuan

            <select
              value={
                p.unit
              }
              onChange={e =>
                update(
                  "unit",
                  e.target.value
                )
              }
            >

              <option value="pcs">
                pcs
              </option>

              <option value="unit">
                unit
              </option>

              <option value="box">
                box
              </option>

            </select>

          </label>


          <label>

            Stok

            <input
              type="number"
              min="0"
              value={
                p.stock || 0
              }
              onChange={e =>
                update(
                  "stock",
                  Number(
                    e.target.value
                  )
                )
              }
            />

          </label>


          <label>

            HPP / Harga Modal

            <input
              type="number"
              min="0"
              value={
                p.purchase_price || 0
              }
              onChange={e =>
                update(
                  "purchase_price",
                  Number(
                    e.target.value
                  )
                )
              }
            />

          </label>


          <label>

            Harga Jual

            <input
              type="number"
              min="0"
              value={
                p.selling_price || 0
              }
              onChange={e =>
                update(
                  "selling_price",
                  Number(
                    e.target.value
                  )
                )
              }
            />

          </label>

        </div>


        {/* PREVIEW HARGA */}

        <div className="pricePreview">

          <div>

            <span>
              Harga Modal
            </span>

            <b>
              {money(
                p.purchase_price
              )}
            </b>

          </div>


          <div>

            <span>
              Harga Jual
            </span>

            <b>
              {money(
                p.selling_price
              )}
            </b>

          </div>


          <div>

            <span>
              Margin
            </span>

            <b>

              {money(
                Number(
                  p.selling_price || 0
                ) -
                Number(
                  p.purchase_price || 0
                )
              )}

            </b>

          </div>

        </div>


        <div className="modalActions">

          <button
            className="secondary"
            onClick={close}
          >
            Batal
          </button>


          <button
            className="primary"
            onClick={() =>
              save(p)
            }
          >
            Simpan Produk
          </button>

        </div>

      </div>

    </div>

  );

}


/* =========================================================
   REACT ROOT
   ========================================================= */

createRoot(
  document.getElementById("root")
).render(
  <App />
);