import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'getBalance' : () => Promise<bigint>,
  'getTime' : () => Promise<bigint>,
  'topUp' : (arg_0: bigint) => Promise<bigint>,
  'withdraw' : (arg_0: bigint) => Promise<bigint>,
}
