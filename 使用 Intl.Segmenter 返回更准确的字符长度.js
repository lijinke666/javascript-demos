const s = new Intl.Segmenter('en')

['1','1️⃣','t', '@','😴', '🚗','👨‍👩‍👧‍👦'].forEach((v) => console.log([...s.segment(v)].length));

['1','1️⃣','t', '@','😴', '🚗','👨‍👩‍👧‍👦'].forEach((v) => console.log(v.length))
