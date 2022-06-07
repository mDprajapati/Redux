import axios from "axios";
import { baseURL } from "../../Services/APIConfig";
import { FreeListingTypes, StepOne } from "../free-listing/free-listing.types";

export const GetSuppType = (e) => async (dispatch) => {
    
    let obj = {
        entity: "company",
        searchKeyword: e,
        entityType: "supplierType"
  }
  axios.post(baseURL + `getCountries`,obj).then(
        res => {
            
              if(res.data.status ==='success'){
                  
                  dispatch({
                    type:FreeListingTypes.SUPPLY_TYPE,
                    payload: res.data.body.supplierType
                  })
              }
        }
  ).catch(
        err => {
              console.log(err);
        }
  )
}

export const StepOneForm = (value) => ({
      type: StepOne.STEP_ONE_DATA,
      payload: value,
  });