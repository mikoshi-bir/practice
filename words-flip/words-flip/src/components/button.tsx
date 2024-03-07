const Button = (props: React.ComponentProps<'button'>) => {
  return (
    <button
      className="fold-500 relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500 dark:bg-black"
      {...props}
    />
  )
}

export default Button
