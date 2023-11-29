export default function ({ redirect }) {
  const user = localStorage.getItem('user')

  if (user) {
    return redirect('/')
  }
}
