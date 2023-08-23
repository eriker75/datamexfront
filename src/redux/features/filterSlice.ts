import { FilterType } from '@/models/types/FilterType';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import jsCookie from 'js-cookie';

export interface FilterState {
  states: string[];
  trades: string[];
  sizes: string[];
  cities: string[];
}

const initialEmptyState : FilterState = {
  states: [],
  trades: [],
  sizes: [],
  cities: []
}

const initialState: FilterState =
  jsCookie.get('filterState')
    ? JSON.parse(jsCookie.get('filterState') as string)
    : initialEmptyState

export interface FilterPayloadInterface {
  type: FilterType;
  filter: string;
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleFilter(state, action: PayloadAction<FilterPayloadInterface>) {
      const { type, filter } = action.payload;
      const index = state[type].indexOf(filter);
      if (index > -1) {
        state[type].splice(index, 1);
      } else {
        state[type].push(filter);
      }
      jsCookie.set('filterState', JSON.stringify({
        cities: state.cities,
        states: state.states,
        trades: state.trades,
        sizes: state.trades
      }));
    },
  },
})

export const { toggleFilter } = filtersSlice.actions
export const FilterSliceReducer = filtersSlice.reducer