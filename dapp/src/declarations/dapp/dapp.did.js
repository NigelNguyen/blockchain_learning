export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getBalance' : IDL.Func([], [IDL.Nat], ['query']),
    'getTime' : IDL.Func([], [IDL.Int], ['query']),
    'topUp' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'withdraw' : IDL.Func([IDL.Nat], [IDL.Nat], []),
  });
};
export const init = ({ IDL }) => { return []; };
