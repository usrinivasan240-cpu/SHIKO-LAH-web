import { MenuItem, shiokLahMenu } from './shiok-menu-part1'
import { shiokLahMenuPart2 } from './shiok-menu-part2'
import { nirmalyaVegMenu } from './nirmalya-menu'

export type { MenuItem }

export const allShiokLahMenu: MenuItem[] = [...shiokLahMenu, ...shiokLahMenuPart2]
export const allNirmalyaMenu: MenuItem[] = nirmalyaVegMenu
export const allMenuItems: MenuItem[] = [...allShiokLahMenu, ...allNirmalyaMenu]

export function getMenuByBrand(brand: 'shiok' | 'nirmalya'): MenuItem[] {
  return brand === 'shiok' ? allShiokLahMenu : allNirmalyaMenu
}

export function getCategories(brand: 'shiok' | 'nirmalya'): string[] {
  const menu = getMenuByBrand(brand)
  return [...new Set(menu.map(item => item.category))]
}

export function getMenuByCategory(brand: 'shiok' | 'nirmalya', category: string): MenuItem[] {
  return getMenuByBrand(brand).filter(item => item.category === category)
}

export function searchMenu(brand: 'shiok' | 'nirmalya', query: string): MenuItem[] {
  const lower = query.toLowerCase()
  return getMenuByBrand(brand).filter(item =>
    item.name.toLowerCase().includes(lower) ||
    item.description.toLowerCase().includes(lower) ||
    item.tags.some(tag => tag.toLowerCase().includes(lower))
  )
}

export function filterMenu(brand: 'shiok' | 'nirmalya', filters: string[]): MenuItem[] {
  if (filters.length === 0) return getMenuByBrand(brand)
  return getMenuByBrand(brand).filter(item =>
    filters.every(filter => item.tags.includes(filter) || item.type === filter)
  )
}

export function getMenuItem(brand: 'shiok' | 'nirmalya', id: string): MenuItem | undefined {
  return getMenuByBrand(brand).find(item => item.id === id)
}

export function getRelatedDishes(item: MenuItem, limit = 4): MenuItem[] {
  return allMenuItems
    .filter(i => i.id !== item.id && i.brand === item.brand && i.category === item.category)
    .slice(0, limit)
}
