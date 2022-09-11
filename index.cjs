const x = async () => {
  const module = await import('@andystevenson/goodtill')
  console.log({ module })
}

x()
