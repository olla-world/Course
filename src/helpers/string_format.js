const replace_space_with_hyphen = (words) => words.toLowerCase().split(' ').join('-')
const replace_hyphen_with_space = (words) => words.split('-').map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

export { replace_space_with_hyphen, replace_hyphen_with_space }