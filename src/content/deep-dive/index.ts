import { aceClubs } from './ace-clubs';
import { aceDiamonds } from './ace-diamonds';
import { aceHearts } from './ace-hearts';
import { aceSpades } from './ace-spades';
import { twoClubs } from './2-clubs';
import { twoDiamonds } from './2-diamonds';
import { twoHearts } from './2-hearts';
import { twoSpades } from './2-spades';
import { threeClubs } from './3-clubs';
import { threeDiamonds } from './3-diamonds';
import { threeHearts } from './3-hearts';
import { threeSpades } from './3-spades';
import { fourClubs } from './4-clubs';
import { fourDiamonds } from './4-diamonds';
import { fourHearts } from './4-hearts';
import { fourSpades } from './4-spades';
import { fiveClubs } from './5-clubs';
import { fiveDiamonds } from './5-diamonds';
import { fiveHearts } from './5-hearts';
import { fiveSpades } from './5-spades';
import { sixClubs } from './6-clubs';
import { sixDiamonds } from './6-diamonds';
import { sixHearts } from './6-hearts';
import { sixSpades } from './6-spades';
import { sevenClubs } from './7-clubs';
import { sevenDiamonds } from './7-diamonds';
import { sevenHearts } from './7-hearts';
import { sevenSpades } from './7-spades';
import { eightClubs } from './8-clubs';
import { eightDiamonds } from './8-diamonds';
import { eightHearts } from './8-hearts';
import { eightSpades } from './8-spades';
import { nineClubs } from './9-clubs';
import { nineDiamonds } from './9-diamonds';
import { nineHearts } from './9-hearts';
import { nineSpades } from './9-spades';
import { tenClubs } from './10-clubs';
import { tenDiamonds } from './10-diamonds';
import { tenHearts } from './10-hearts';
import { tenSpades } from './10-spades';
import { jackClubs } from './jack-clubs';
import { jackDiamonds } from './jack-diamonds';
import { jackHearts } from './jack-hearts';
import { jackSpades } from './jack-spades';
import { queenClubs } from './queen-clubs';
import { queenDiamonds } from './queen-diamonds';
import { queenHearts } from './queen-hearts';
import { queenSpades } from './queen-spades';
import { kingClubs } from './king-clubs';
import { kingDiamonds } from './king-diamonds';
import { kingHearts } from './king-hearts';
import { kingSpades } from './king-spades';
import type { DeepDiveCard } from './types';

export type { DeepDiveCard, DeepDiveLevel, DeepDiveQuestion, DeepDiveResolved } from './types';
export { resolveDeepDive } from './types';

/** Full 52-card lore deck, grouped by world then rank. */
export const deepDiveDeck: DeepDiveCard[] = [
  aceHearts,
  twoHearts,
  threeHearts,
  fourHearts,
  fiveHearts,
  sixHearts,
  sevenHearts,
  eightHearts,
  nineHearts,
  tenHearts,
  jackHearts,
  queenHearts,
  kingHearts,
  aceDiamonds,
  twoDiamonds,
  threeDiamonds,
  fourDiamonds,
  fiveDiamonds,
  sixDiamonds,
  sevenDiamonds,
  eightDiamonds,
  nineDiamonds,
  tenDiamonds,
  jackDiamonds,
  queenDiamonds,
  kingDiamonds,
  aceClubs,
  twoClubs,
  threeClubs,
  fourClubs,
  fiveClubs,
  sixClubs,
  sevenClubs,
  eightClubs,
  nineClubs,
  tenClubs,
  jackClubs,
  queenClubs,
  kingClubs,
  aceSpades,
  twoSpades,
  threeSpades,
  fourSpades,
  fiveSpades,
  sixSpades,
  sevenSpades,
  eightSpades,
  nineSpades,
  tenSpades,
  jackSpades,
  queenSpades,
  kingSpades,
];
