// @ts-check

import fs from 'fs/promises';
import { convert } from './convert_pron.mjs';

// let limiter = 0;
for (const origName of await fs.readdir("tdmelodic-neologd")) {
  const filename = origName.replace(".csv", "");
  const inputFile = await fs.open(`tdmelodic-neologd/${filename}.csv`);
  const outputOkFile = await fs.open(`tdmelodic-neologd-split-ok/${filename}.csv`, "w");
  const outputErrFile = await fs.open(`tdmelodic-neologd-split-err/${filename}.csv`, "w");

  for await (const line of inputFile.readLines()) {
    try {
      const converted = convert(line);
      outputOkFile.write(converted + "\n");
    } catch (error) {
      outputErrFile.write(line + "\n");
    }

    // if (++limiter > 100) {
    //   break;
    // }
  }

  await inputFile.close();
  await outputOkFile.close();
  await outputErrFile.close();
}
