// @ts-check

/**
 * @param {string} s
 */
export function splitMora(s) {
  let position = 0;
  const moras = [];
  while (position < s.length) {
    const mora = MORA_LIST.find((m) => s.slice(position).startsWith(m));
    if (!mora) throw new Error(`Unknown Mora ${s}`);
    position += mora.length;

    if (["[", "]"].includes(mora)) {
      moras[moras.length - 1] += mora;
    } else {
      moras.push(mora);
    }
  }
  return moras;
}

const MORA_LIST = [
  "[", "]",
  "ー",
  "グヮ",
  "クヮ",
  "ヴョ",
  "ヴュ",
  "ヴャ",
  "ヴォ",
  "ヴェ",
  "ヴィ",
  "ヴァ",
  "ヴ",
  "ン",
  "ヲ",
  "ヱ",
  "ヰ",
  "ワ",
  "ロ",
  "レ",
  "ル",
  "リョ",
  "リュ",
  "リャ",
  "リェ",
  "リ",
  "ラ",
  "ヨ",
  "ョ",
  "ユ",
  "ュ",
  "ヤ",
  "ャ",
  "モ",
  "メ",
  "ム",
  "ミョ",
  "ミュ",
  "ミャ",
  "ミェ",
  "ミ",
  "マ",
  "ポ",
  "ボ",
  "ホ",
  "ペ",
  "ベ",
  "ヘ",
  "プ",
  "ブ",
  "フォ",
  "フェ",
  "フィ",
  "ファ",
  "フ",
  "ピョ",
  "ピュ",
  "ピャ",
  "ピェ",
  "ピ",
  "ビョ",
  "ビュ",
  "ビャ",
  "ビェ",
  "ビ",
  "ヒョ",
  "ヒュ",
  "ヒャ",
  "ヒェ",
  "ヒ",
  "パ",
  "バ",
  "ハ",
  "ノ",
  "ネ",
  "ヌ",
  "ニョ",
  "ニュ",
  "ニャ",
  "ニェ",
  "ニ",
  "ナ",
  "ドゥ",
  "ド",
  "トゥ",
  "ト",
  "デョ",
  "デュ",
  "デャ",
  "ディ",
  "デ",
  "テョ",
  "テュ",
  "テャ",
  "ティ",
  "テ",
  "ヅ",
  "ツォ",
  "ツェ",
  "ツィ",
  "ツァ",
  "ツ",
  "ッ",
  "ヂ",
  "チョ",
  "チュ",
  "チャ",
  "チェ",
  "チ",
  "ダ",
  "タ",
  "ゾ",
  "ソ",
  "ゼ",
  "セ",
  "ズィ",
  "ズ",
  "スィ",
  "ス",
  "ジョ",
  "ジュ",
  "ジャ",
  "ジェ",
  "ジ",
  "ショ",
  "シュ",
  "シャ",
  "シェ",
  "シ",
  "ザ",
  "サ",
  "ゴ",
  "コ",
  "ゲ",
  "ケ",
  "グ",
  "ク",
  "ギョ",
  "ギュ",
  "ギャ",
  "ギェ",
  "ギ",
  "キョ",
  "キュ",
  "キャ",
  "キェ",
  "キ",
  "ガ",
  "カ",
  "オ",
  "ォ",
  "エ",
  "ェ",
  "ウォ",
  "ウェ",
  "ウィ",
  "ウ",
  "ゥ",
  "イェ",
  "イ",
  "ィ",
  "ア",
  "ァ",
  "ヮ",
  "ヶ",
];