import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { RootState } from './rootReducer';
import { AppDispatch } from '.';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
