// @ts-check

import { splitMora } from "./mora_list.mjs";

/**
 * @param {string} line
 */
export function convert(line) {
  const cols = line.split(",");

  let moras = splitMora(cols[12]);
  console.assert(moras.join("") === cols[12]);

  /** @type {{ pron: string, acc: string }[]} */
  const segments = [];

  while (moras.length > 0) {
    const position = moras.findIndex(s => s.endsWith("]"));
    const position2 = moras.slice(position + 1).findIndex(s => s.endsWith("]"));

    const accent = (position ?? -1) + 1;
    if (position2 === -1) {
      segments.push({ pron: moras.join(""), acc: `${accent}/${moras.length}` })
      break;
    }

    let position3 = moras.slice(position + 1).findIndex(s => s.endsWith("["));
    if (position3 === -1) position3 = position2;
    position3 += position + 1;

    segments.push({ pron: moras.slice(0, position3).join(""), acc: `${accent}/${position3}` })
    moras = moras.slice(position3);
  }

  const colons = ":".repeat(segments.length - 1);

  const orig = cols[10] + colons;
  const read = cols[11] + colons;
  const pron = segments.map(({ pron }) => pron.replace(/[\[\]]/g, "")).join(":");
  const acc = segments.map(({ acc }) => acc).join(":");

  return [...cols.slice(0, 10), orig, read, pron, acc].join(",")
}

// console.log(convert("(株)さくらケーシーエス,1292,1292,2298,名詞,固有名詞,組織,*,*,*,さくらケーシーエス,カブシキガイシャサクラケーシーエス,カ[ブシキガ]イシャサ[クラケ[ーシ]ーエ]ス"))