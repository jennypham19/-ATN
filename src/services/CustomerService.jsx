import axios from "axios";

const CUSTOMER_API_BASE_URL = "http://localhost:8080/api/customer";
const CUSTOMER_API_BASE_URL_CREATE =
  "http://localhost:8080/api/customer/create";

class CustomerService {
  getCustomer() {
    return axios.get(CUSTOMER_API_BASE_URL);
  }

  createCustomer(customer) {
    return axios.post(CUSTOMER_API_BASE_URL_CREATE, customer);
  }

  getCustomerId(customerId) {
    return axios.get(CUSTOMER_API_BASE_URL + "/" + customerId);
  }

  updateCustomer(customer, customerId) {
    return axios.put(CUSTOMER_API_BASE_URL + "/" + customerId, customer);
  }

  deleteCustomer(customerId) {
    return axios.delete(CUSTOMER_API_BASE_URL + "/" + customerId);
  }
}

export default new CustomerService();
