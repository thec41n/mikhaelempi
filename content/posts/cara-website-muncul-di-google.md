---
title: "Cara Biar Website Next.js Muncul di Google"
date: "2026-09-14"
description: "Panduan simpel SEO buat website Next.js, dari judul halaman, sitemap, sampai didaftarin ke Google Search Console."
tags: ["seo", "nextjs", "google", "tutorial"]
---

Halo guys! Ini pertanyaan klasik yang muncul tiap kali abis _deploy_ website pertama. Udah _online_, udah bisa dibuka, tapi pas dicari di Google... ga ada.

Soalnya website yang **udah online** itu beda sama website yang **ketemu di Google**. Ibarat lu buka warung, tapi warungnya di dalam gang dan ga ada plangnya. Ya ga ada yang dateng guys.

Ada tiga hal yang harus dibenerin. Gw urutin dari yang paling sering kelewat.

## 1. Tiap Halaman Wajib Punya Judul Sendiri

Ini kesalahan paling umum di project Next.js. Biasanya orang nulis `metadata` sekali doang di `layout.tsx`, terus lupa. Akibatnya semua halaman ngewarisin judul yang sama:

```
/            -> Portfolio Gw
/about       -> Portfolio Gw
/projects    -> Portfolio Gw
/blog        -> Portfolio Gw
```

Di mata Google ini kayak ngirim lima lamaran kerja dengan isi yang sama persis, cuma beda amplop. Ya dibuang empat, disimpen satu. Halaman lu saling makan sendiri.

Solusinya, kasih tiap halaman identitasnya sendiri:

```tsx
// app/about/page.tsx
export const metadata = {
  title: "About",
  description: "Pengalaman kerja dan tech stack gw.",
};
```

Terus di `layout.tsx`, bikin polanya sekali aja:

```tsx
title: {
  default: "Nama Lu | Software Engineer",
  template: "%s | Nama Lu",
},
```

Si `%s` bakal keisi otomatis sama judul tiap halaman. Jadi `/about` berubah jadi **About | Nama Lu**. Rapi, dan ga usah nulis nama lu berkali-kali.

Deskripsinya juga jangan disamain ya. Itu yang muncul jadi tulisan abu-abu di hasil pencarian.

## 2. Kasih Google Peta

Google itu nyasar kalo ga dikasih peta. Petanya namanya **sitemap** — isinya daftar semua halaman yang lu punya.

Enaknya di Next.js, ga usah nulis XML manual. Cukup bikin file `app/sitemap.ts`:

```ts
export default function sitemap() {
  return [
    { url: "https://namasitus.com/", priority: 1 },
    { url: "https://namasitus.com/about", priority: 0.8 },
    { url: "https://namasitus.com/blog", priority: 0.6 },
  ];
}
```

Pas lu `build`, Next otomatis nge-_generate_ jadi `sitemap.xml`. Karena bentuknya kode, daftar artikel blog bisa ikut ke-_generate_ sendiri tiap ada tulisan baru — ga usah diedit manual tiap posting.

Satu hal penting: **pastiin URL di sitemap itu yang beneran `200`**, bukan yang kena pengalihan. Kalo salah, lu nyuruh Google ngindeks jalan pintas, bukan halamannya.

## 3. Kasih Tau Google Kalo Website Lu Ada

Ini bagian yang paling sering dilewatin, padahal paling nentuin.

_Meta tag_ serapi apapun **ga ada gunanya kalo Google ga tau website lu ada**. Google nemu halaman baru lewat _link_ dari website lain. Website baru = nol _link_ = ga ada yang lewat.

Jadi harus didaftarin manual di [Google Search Console](https://search.google.com/search-console):

![Tampilan Search Console](/mikhaelempi/image/blog/cara-website-muncul-di-google/google-search-console.jpg)

1. Daftarin URL website lu
2. Pilih Property Type
![Tampilan Property Type](/mikhaelempi/image/blog/cara-website-muncul-di-google/property-type.png)
3. Verifikasi kepemilikan (paling gampang pake _meta tag_)
![Tampilan Verifikasi Kepemilikan](/mikhaelempi/image/blog/cara-website-muncul-di-google/verifikasi-kepemilikan.png)
4. Submit `sitemap.xml`
5. Buka **URL Inspection**, tempel URL-nya, klik **Request Indexing**
![Tampilan Inspeksi URL](/mikhaelempi/image/blog/cara-website-muncul-di-google/inspeksi-url.png)

Nomor 4 itu ibarat nyerobot antrian. Tanpa itu, lu bisa nunggu berminggu-minggu.

Dan satu lagi yang gratis tapi efeknya paling gede: **pasang link website lu di profil LinkedIn atau GitHub**. Satu _link_ dari halaman yang udah dipercaya Google jauh lebih ngefek daripada semua _meta tag_ yang lu pasang.

## Penutup

SEO itu adalah kunci website kalian bisa diliat banyak orang. Intinya cuma mastiin tiga hal:

1. Tiap halaman punya identitas sendiri
2. Google dikasih peta
3. Google dikasih tau kalo website lu ada

Abis itu tinggal sabar. Biasanya 3 hari sampe 2 minggu baru kelihatan hasilnya. Cek pake `site:namasitus.com` di Google buat mastiin udah keindeks apa belom.

Selamat website kalian udah siap ditemukan! 🚀
