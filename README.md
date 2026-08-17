# Orta Avrupa Bütçe

Budapeşte · Viyana · Bratislava · Prag seyahati için çevrimdışı çalışan bütçe takibi.
Kurulum gerektirmez, sunucu gerektirmez, veri hiçbir yere gönderilmez — her şey telefonun kendi hafızasında kalır.

## Dosyalar

| Dosya | İşi |
|---|---|
| `index.html` | Uygulamanın tamamı (arayüz + hesaplar) |
| `sw.js` | Çevrimdışı önbellek — uçak modunda açılmasını sağlar |
| `manifest.webmanifest` | Ana ekrandaki ad, ikon, tam ekran ayarı |
| `icon-*.png` | Uygulama ikonları |

Dört dosya da aynı klasörde durmalı.

## GitHub'a yükleme (bilgisayardan, 3 dakika)

1. github.com → sağ üstteki **+** → **New repository**
2. Ad: `butce` · **Public** seç · **Create repository**
   (Repo public olmalı; ücretsiz hesapta Pages sadece public repolarda çalışır.)
3. Açılan sayfada **uploading an existing file** bağlantısına tıkla, bu klasördeki **bütün dosyaları** sürükle, **Commit changes**.
4. **Settings** → sol menüde **Pages** → *Source* kısmında **Deploy from a branch**, branch **main**, klasör **/ (root)** → **Save**.
5. 1–2 dakika bekle, sayfayı yenile. Adresin şu olacak:
   `https://KULLANICI-ADIN.github.io/butce/`

## iPhone'a kurma

1. Bu adresi **Safari**'de aç (Chrome değil — ana ekrana ekleme Safari'de düzgün çalışır).
2. Paylaş düğmesi → **Ana Ekrana Ekle** → **Ekle**.
3. Bir kez internetli açıp kapat. Artık ikonundan açıldığında adres çubuğu olmadan, tam ekran ve **internetsiz** çalışır.

Uçağa binmeden veya yurt dışına çıkmadan önce bir kez açıp kapatman yeterli.

## Uygulamayı güncellersen

`index.html` içinde değişiklik yaptıysan, `sw.js` dosyasının başındaki sürümü artır:

```js
var VERSION = "oab-v1";   // -> "oab-v2"
```

Aksi halde telefon eski kopyayı göstermeye devam eder. Sürüm değişince güncelleme kendiliğinden iner.

## Veriler

Harcamalar tarayıcının yerel hafızasında (`localStorage`) tutulur, adrese bağlıdır.
Safari'de "Web Sitesi Verilerini Temizle" dersen silinir. **Kur** sekmesindeki **Yedek**
kutusundaki metni ara sıra kendine e‑posta at; aynı kutuya yapıştırıp geri yükleyebilirsin.
`Özet` sekmesinden CSV olarak da dışa aktarılır.

## Kurlar

Kur sekmesinden elle girilir. Varsayılanlar 17 Ağustos 2026 civarındaki serbest piyasa
değerleridir (1 EUR ≈ 55,50 TL · 1 HUF ≈ 0,144 TL · 1 CZK ≈ 2,26 TL). Nakit bozduruyorsan
büfeden aldığın gerçek kuru yaz — hesap o zaman gerçeğe yakın olur.
