export default function ({ route, redirect }) {
  const user = localStorage.getItem('user')

  if (!user && route.path !== '/auth/signin') {
    return redirect('/auth/signin')
  }
}
