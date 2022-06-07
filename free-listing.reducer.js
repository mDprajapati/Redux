import {FreeListingTypes, StepOne} from './free-listing.types';

const INITIAL_STATE = {
  ContactDetails: {
    suppType: [],
  },
  stepOne: {
    BusinessName: "",
    email: "",
    firstName: "",
    lastname: "",
    phone: "",
    whatsapp: "",
    country: [],
    city: [],
    website: "",
    zip: "",
    CountryCode: "",
  },
};

const FreeListing = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case FreeListingTypes.SUPPLY_TYPE:
            return {
                ...state,
                ContactDetails:action.data
            }
        case StepOne.STEP_ONE_DATA:
            
            return {
                ...state,
                stepOne:action.payload
            }
        default:
            return state;
    }
}

export default FreeListing;