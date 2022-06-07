import { combineReducers } from 'redux';

import userDashboard from '../user-dashboard/user-dashboard.reducer';
import userReducer from '../user/user.reducer';
import CompanyIndividualReducer from '../company-individual/company-individual.reducer';
import mapReducer from '../map/map.reducer';
import searchReducer from '../search/search.reducer';
import themeReducer from '../theme/theme.reducer';
import headerReducer from '../header/header.reducer';
import homepageReducer from '../homepage/homepage.reducer';
import company from '../company/company-reducer';
import FreeListing from '../free-listing/free-listing.reducer';
import userProduct from '../user-product/user-product.reducer';
import userService from '../user-service/user-service.reducer';

const rootReducer = combineReducers({
      userDashboard: userDashboard,
      user: userReducer,
      companyIndividual: CompanyIndividualReducer,
      map: mapReducer,
      search: searchReducer,
      theme: themeReducer,
      header: headerReducer,
      home: homepageReducer,
      company: company,
      freeListing:FreeListing,
      userProduct:userProduct,
      userService:userService,
})

export default rootReducer;