export interface otherFilters {
  id?: number;
  filter_option: 'diameter'| 'population'| 'orbital_period'| 'rotation_period'| 'surface_water';
  as: 'greater' | 'less' | 'equal';
  value: number;
}

export interface planetInterface {
  name: string;
  otherFilters: otherFilters[] | []
}

export interface UsersState {
  entities: []
  filtered: []
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
} 
