let defaultCity = '合肥'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}
export default {
  city: defaultCity
}
