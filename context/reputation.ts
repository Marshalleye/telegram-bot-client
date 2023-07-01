import { getReputationsFx } from '@/api/reputation';
import { IReputation } from '@/types/reputation';
import { createDomain, sample } from 'effector';
import { createGate } from 'effector-react';

const reputations = createDomain();

export const $reputations = reputations
  .createStore<IReputation[]>([])
  .on(getReputationsFx.done, (_, { result }) => result)
  .on(getReputationsFx.fail, (_, { error }) => {
    console.log(error.message);
  });

export const ReputationGate = createGate();

sample({
  clock: ReputationGate.open,
  target: getReputationsFx
});
