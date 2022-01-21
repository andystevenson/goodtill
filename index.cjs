const x = async () => {
  const module = await import('@andystevenson/goodtill/authentication')
  console.log({ module })
}

x()
