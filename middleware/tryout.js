export default function ({ route, redirect }) {
  const userToken = localStorage.getItem('token')

  if (!userToken) {
    return redirect('/')
  }
}
