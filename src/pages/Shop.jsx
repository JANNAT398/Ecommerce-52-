import React, { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router'
import { IoOptionsOutline } from 'react-icons/io5'
import Container from '../components/layout/Container'
import ProductCard from '../components/ProductCard'
import FilterSidebar from '../components/FilterSidebar'
import {
  categories,
  products,
  popularTags,
  searchProducts,
  getCategoryCounts,
  getPriceBounds,
  getSaleProducts,
} from '../data/products'

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'name', label: 'Name A-Z' },
  { value: 'rating', label: 'Top Rated' },
]

const ITEMS_PER_PAGE = 9

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search') || ''
  const urlCategory = searchParams.get('category') || ''
  const urlSale = searchParams.get('sale') === 'true'

  const priceBounds = useMemo(() => getPriceBounds(), [])
  const categoryCounts = useMemo(() => getCategoryCounts(), [])
  const saleProducts = useMemo(() => getSaleProducts(3), [])

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState(urlCategory ? [urlCategory] : [])
  const [priceRange, setPriceRange] = useState([priceBounds.min, priceBounds.max])
  const [selectedRatings, setSelectedRatings] = useState([])
  const [selectedTags, setSelectedTags] = useState([])
  const [sort, setSort] = useState('latest')
  const [saleOnly, setSaleOnly] = useState(urlSale)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    if (urlCategory) setSelectedCategories([urlCategory])
  }, [urlCategory])

  useEffect(() => {
    setSaleOnly(urlSale)
  }, [urlSale])

  const resetPage = () => setCurrentPage(1)

  const toggleCategory = (slug) => {
    resetPage()
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    )
  }

  const toggleRating = (stars) => {
    resetPage()
    setSelectedRatings((prev) =>
      prev.includes(stars) ? prev.filter((s) => s !== stars) : [...prev, stars]
    )
  }

  const toggleTag = (tag) => {
    resetPage()
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const filtered = useMemo(() => {
    let list = search ? searchProducts(search) : [...products]

    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category))
    }

    if (saleOnly) {
      list = list.filter((p) => p.sale)
    }

    list = list.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

    if (selectedRatings.length > 0) {
      list = list.filter((p) => selectedRatings.some((r) => (p.rating || p.ratingCount) >= r))
    }

    if (selectedTags.length > 0) {
      list = list.filter((p) => p.tags?.some((t) => selectedTags.includes(t)))
    }

    if (sort === 'price-low') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-high') list = [...list].sort((a, b) => b.price - a.price)
    if (sort === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name))
    if (sort === 'rating') list = [...list].sort((a, b) => (b.rating || 0) - (a.rating || 0))
    if (sort === 'latest') list = [...list].sort((a, b) => b.id - a.id)

    return list
  }, [search, selectedCategories, priceRange, selectedRatings, selectedTags, sort, saleOnly])

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE))
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const clearFilters = () => {
    setCurrentPage(1)
    setSelectedCategories([])
    setPriceRange([priceBounds.min, priceBounds.max])
    setSelectedRatings([])
    setSelectedTags([])
    setSaleOnly(false)
    setSearchParams({})
  }

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedRatings.length > 0 ||
    selectedTags.length > 0 ||
    saleOnly ||
    priceRange[0] !== priceBounds.min ||
    priceRange[1] !== priceBounds.max

  return (
    <Container className="py-8 pb-16">
      {/* Toolbar */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 mb-8 font-pop">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#009606] transition-colors lg:hidden"
          >
            <IoOptionsOutline size={18} />
            Filter
          </button>
        </div>

        <div className="flex items-center gap-2 justify-center">
          <span className="text-sm text-gray-600 hidden sm:inline">Sort by:</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-2 font-pop text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer min-w-[160px]"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <p className="text-sm text-gray-600 text-right">
          <span className="font-semibold text-gray-900">{filtered.length}</span> Results Found
        </p>
      </div>

      <div className="flex gap-8 relative">
        {/* Sidebar — desktop always visible, mobile toggle */}
        <div
          className={`${
            sidebarOpen ? 'fixed inset-0 z-50 lg:static lg:inset-auto' : 'hidden lg:block'
          } lg:w-[280px] shrink-0`}
        >
          {sidebarOpen && (
            <button
              type="button"
              aria-label="Close filters"
              className="fixed inset-0 bg-black/40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}
          <div
            className={`${
              sidebarOpen
                ? 'fixed top-0 left-0 h-full w-[300px] max-w-[85vw] bg-white z-50 overflow-y-auto p-6 shadow-xl lg:static lg:w-auto lg:max-w-none lg:shadow-none lg:p-0'
                : ''
            }`}
          >
            {sidebarOpen && (
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h3 className="font-pop font-bold text-lg">Filters</h3>
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="text-gray-500 hover:text-gray-800 text-xl leading-none"
                >
                  ×
                </button>
              </div>
            )}

            <div className="hidden lg:flex items-center gap-2 mb-6">
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full"
              >
                <IoOptionsOutline size={18} />
                Filter
              </button>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-sm text-gray-500 hover:text-primary underline"
                >
                  Clear all
                </button>
              )}
            </div>

            <FilterSidebar
              categories={categories}
              categoryCounts={categoryCounts}
              selectedCategories={selectedCategories}
              onCategoryToggle={toggleCategory}
              priceBounds={priceBounds}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              selectedRatings={selectedRatings}
              onRatingToggle={toggleRating}
              popularTags={popularTags}
              selectedTags={selectedTags}
              onTagToggle={toggleTag}
              saleProducts={saleProducts}
            />
          </div>
        </div>

        {/* Product grid */}
        <div className="flex-1 min-w-0">
          {search && (
            <p className="font-pop text-sm text-gray-500 mb-4">
              Showing results for &ldquo;{search}&rdquo;
            </p>
          )}

          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 mb-5 font-pop">
              <span className="text-sm text-gray-500">Active filters:</span>
              {selectedCategories.map((slug) => (
                <button
                  key={slug}
                  type="button"
                  onClick={() => toggleCategory(slug)}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20"
                >
                  {categories.find((c) => c.slug === slug)?.name || slug} ×
                </button>
              ))}
              {selectedTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20"
                >
                  {tag} ×
                </button>
              ))}
              {selectedRatings.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => toggleRating(r)}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20"
                >
                  {r}★+ ×
                </button>
              ))}
              {saleOnly && (
                <button
                  type="button"
                  onClick={() => { setSaleOnly(false); resetPage() }}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20"
                >
                  Sale only ×
                </button>
              )}
              <button
                type="button"
                onClick={clearFilters}
                className="text-xs text-gray-500 hover:text-primary underline ml-1"
              >
                Clear all
              </button>
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="text-center py-20 font-pop">
              <p className="text-gray-500 text-lg mb-2">No products found for this filter.</p>
              <p className="text-gray-400 text-sm mb-4">Filter change kore abar try korun, ba sob filter clear korun.</p>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#009606] transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {paginated.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-10 font-pop">
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                    className="px-4 py-2 rounded-lg border border-gray-200 text-sm disabled:opacity-40 hover:border-primary hover:text-primary transition-colors"
                  >
                    ← Prev
                  </button>
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === i + 1
                          ? 'bg-primary text-white'
                          : 'border border-gray-200 hover:border-primary hover:text-primary'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => p + 1)}
                    className="px-4 py-2 rounded-lg border border-gray-200 text-sm disabled:opacity-40 hover:border-primary hover:text-primary transition-colors"
                  >
                    Next →
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Container>
  )
}

export default Shop
