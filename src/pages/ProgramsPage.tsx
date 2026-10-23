import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, X, ChevronDown, Grid, List, MessageSquare, Clock } from 'lucide-react';
import { courses } from '../data/courses';
import { departments } from '../data/departments';

const ITEMS_PER_PAGE = 12;

const levelColors: Record<string, string> = {
  Beginner: '#22D3FF',
  Intermediate: '#FF6A00',
  Advanced: '#FFB000',
  'All Levels': '#087BFF',
};

export default function ProgramsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [page, setPage] = useState(1);

  const search = searchParams.get('search') || '';
  const deptFilter = searchParams.get('dept') || '';
  const levelFilter = searchParams.get('level') || '';
  const featuredFilter = searchParams.get('featured') === 'true';

  const updateParam = (key: string, val: string) => {
    const p = new URLSearchParams(searchParams);
    if (val) p.set(key, val); else p.delete(key);
    p.delete('page');
    setSearchParams(p);
    setPage(1);
  };

  const clearFilters = () => {
    setSearchParams({});
    setPage(1);
  };

  const filtered = useMemo(() => {
    return courses.filter(c => {
      const q = search.toLowerCase();
      const matchSearch = !q || c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.department.toLowerCase().includes(q) ||
        c.software.some(s => s.toLowerCase().includes(q)) ||
        c.tags?.some(t => t.toLowerCase().includes(q));
      const matchDept = !deptFilter || c.departmentSlug === deptFilter;
      const matchLevel = !levelFilter || c.level === levelFilter;
      const matchFeatured = !featuredFilter || c.featured;
      return matchSearch && matchDept && matchLevel && matchFeatured;
    });
  }, [search, deptFilter, levelFilter, featuredFilter]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const hasFilters = search || deptFilter || levelFilter || featuredFilter;

  return (
    <div className="min-h-screen bg-midnight">
      {/* Page header */}
      <div className="pt-28 pb-12 relative overflow-hidden"
           style={{ background:'linear-gradient(135deg, rgba(3,6,13,0.98) 0%, rgba(5,11,24,0.99) 100%)', borderBottom:'1px solid rgba(8,123,255,0.10)' }}>
        <div className="absolute inset-0 circuit-bg opacity-15" />
        <div className="absolute top-0 left-0 right-0 glass-divider" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] pointer-events-none"
             style={{ background:'radial-gradient(circle, rgba(8,123,255,0.08) 0%, transparent 70%)' }} />
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
            Course Catalogue
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            All Training Programs
          </h1>
          <p className="text-silver/60 max-w-xl">
            Browse {courses.length}+ programs across 15 departments. Filter by department, level or keyword.
          </p>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Mobile filter toggle */}
              <button
                className="lg:hidden w-full flex items-center justify-between px-4 py-3 bg-glass border border-white/10 rounded-xl text-sm text-white font-medium"
                onClick={() => setFiltersOpen(v => !v)}
              >
                <span className="flex items-center gap-2"><Filter size={14} /> Filters</span>
                <ChevronDown size={14} className={`transition-transform ${filtersOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`space-y-5 ${filtersOpen ? 'block' : 'hidden lg:block'}`}>
                {hasFilters && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-2 text-xs text-circuit-orange hover:text-orange-400 transition-colors"
                  >
                    <X size={12} /> Clear all filters
                  </button>
                )}

                {/* Department filter */}
                <div>
                  <h3 className="text-xs font-semibold text-silver/50 uppercase tracking-wider mb-3">Department</h3>
                  <div className="space-y-1 max-h-72 overflow-y-auto pr-1">
                    <button
                      onClick={() => updateParam('dept', '')}
                      className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors ${!deptFilter ? 'bg-electric-blue/15 text-electric-blue' : 'text-silver/60 hover:text-white hover:bg-white/5'}`}
                    >
                      All Departments ({courses.length})
                    </button>
                    {departments.map(d => {
                      const count = courses.filter(c => c.departmentSlug === d.slug).length;
                      return (
                        <button
                          key={d.id}
                          onClick={() => updateParam('dept', d.slug)}
                          className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors ${deptFilter === d.slug ? 'bg-electric-blue/15 text-electric-blue' : 'text-silver/60 hover:text-white hover:bg-white/5'}`}
                        >
                          {d.shortName} ({count})
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Level filter */}
                <div>
                  <h3 className="text-xs font-semibold text-silver/50 uppercase tracking-wider mb-3">Level</h3>
                  <div className="space-y-1">
                    {['', 'Beginner', 'Intermediate', 'Advanced', 'All Levels'].map(lv => (
                      <button
                        key={lv || 'all'}
                        onClick={() => updateParam('level', lv)}
                        className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors ${levelFilter === lv ? 'bg-electric-blue/15 text-electric-blue' : 'text-silver/60 hover:text-white hover:bg-white/5'}`}
                      >
                        {lv || 'All Levels'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Featured */}
                <div>
                  <h3 className="text-xs font-semibold text-silver/50 uppercase tracking-wider mb-3">Featured</h3>
                  <button
                    onClick={() => updateParam('featured', featuredFilter ? '' : 'true')}
                    className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors ${featuredFilter ? 'bg-electric-blue/15 text-electric-blue' : 'text-silver/60 hover:text-white hover:bg-white/5'}`}
                  >
                    Featured Programs ({courses.filter(c => c.featured).length})
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              {/* Search */}
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-silver/40" />
                <input
                  type="search"
                  placeholder="Search programs, technologies..."
                  value={search}
                  onChange={e => updateParam('search', e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-silver/40 focus:outline-none focus:border-electric-blue transition-colors"
                />
              </div>

              {/* Layout toggle */}
              <div className="flex items-center gap-1 p-1 bg-white/5 border border-white/8 rounded-xl">
                <button
                  onClick={() => setLayout('grid')}
                  className={`p-2 rounded-lg transition-colors ${layout === 'grid' ? 'bg-electric-blue/15 text-electric-blue' : 'text-silver/50 hover:text-white'}`}
                  aria-label="Grid view"
                >
                  <Grid size={16} />
                </button>
                <button
                  onClick={() => setLayout('list')}
                  className={`p-2 rounded-lg transition-colors ${layout === 'list' ? 'bg-electric-blue/15 text-electric-blue' : 'text-silver/50 hover:text-white'}`}
                  aria-label="List view"
                >
                  <List size={16} />
                </button>
              </div>
            </div>

            {/* Results count */}
            <div className="text-sm text-silver/50 mb-5">
              {filtered.length} program{filtered.length !== 1 ? 's' : ''} found
              {hasFilters && <span className="text-electric-blue ml-2">· Filtered</span>}
            </div>

            {/* No results */}
            {filtered.length === 0 && (
              <div className="text-center py-20">
                <Search size={40} className="text-silver/20 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">No programs found</h3>
                <p className="text-sm text-silver/50 mb-6">Try adjusting your search or filters.</p>
                <button onClick={clearFilters} className="btn-primary">Clear filters</button>
              </div>
            )}

            {/* Grid */}
            {layout === 'grid' && paginated.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {paginated.map(course => (
                  <div key={course.id} className="flex flex-col p-5 rounded-2xl glass-card card-hover group">
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-electric-blue">{course.department.split(' ').slice(0, 2).join(' ')}</span>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{ color: levelColors[course.level], background: `${levelColors[course.level]}15` }}
                        >
                          {course.level}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-white group-hover:text-electric-blue transition-colors duration-200 leading-snug">
                        {course.title}
                      </h3>
                    </div>
                    <p className="text-xs text-silver/60 leading-relaxed mb-3 line-clamp-2 flex-1">
                      {course.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {course.software.slice(0, 3).map(sw => (
                        <span key={sw} className="px-2 py-0.5 text-xs rounded-md bg-white/5 text-silver/50 border border-white/8">{sw}</span>
                      ))}
                    </div>
                    {course.duration && (
                      <div className="flex items-center gap-1.5 text-xs text-silver/40 mb-3">
                        <Clock size={11} />{course.duration.split('—').pop()?.trim()}
                      </div>
                    )}
                    <div className="flex gap-2 mt-auto">
                      <Link to={`/programs/course/${course.slug}`} className="flex-1 text-center text-xs font-semibold py-2 rounded-lg border border-white/12 text-white/70 hover:border-electric-blue hover:text-electric-blue transition-all duration-200">
                        View Course
                      </Link>
                      <Link to={`/contact?course=${encodeURIComponent(course.title)}`} className="flex items-center gap-1 px-3 py-2 text-xs font-semibold bg-electric-blue text-white rounded-lg hover:bg-blue-500 transition-all duration-200">
                        <MessageSquare size={11} />Enquire
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* List */}
            {layout === 'list' && paginated.length > 0 && (
              <div className="space-y-3">
                {paginated.map(course => (
                  <div key={course.id} className="flex flex-col sm:flex-row gap-4 p-5 rounded-2xl glass-card card-hover group">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-electric-blue">{course.department}</span>
                        <span className="text-xs text-silver/30">·</span>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{ color: levelColors[course.level], background: `${levelColors[course.level]}15` }}
                        >
                          {course.level}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-white group-hover:text-electric-blue transition-colors mb-1">
                        {course.title}
                      </h3>
                      <p className="text-sm text-silver/55 line-clamp-1">{course.shortDescription}</p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {course.software.slice(0, 4).map(sw => (
                          <span key={sw} className="px-2 py-0.5 text-xs rounded-md bg-white/5 text-silver/50 border border-white/8">{sw}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex sm:flex-col gap-2 sm:items-end sm:justify-center flex-shrink-0">
                      {course.duration && (
                        <span className="text-xs text-silver/40 sm:text-right">{course.duration.split('—').pop()?.trim()}</span>
                      )}
                      <Link to={`/programs/course/${course.slug}`} className="text-xs font-semibold px-4 py-2 rounded-lg border border-white/12 text-white/70 hover:border-electric-blue hover:text-electric-blue transition-all whitespace-nowrap">
                        View Course
                      </Link>
                      <Link to={`/contact?course=${encodeURIComponent(course.title)}`} className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 bg-electric-blue text-white rounded-lg hover:bg-blue-500 transition-all whitespace-nowrap">
                        <MessageSquare size={11} />Enquire Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 text-sm rounded-lg border border-white/10 text-silver/60 hover:text-white hover:border-electric-blue disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                  .map((p, i, arr) => (
                    <span key={p}>
                      {i > 0 && arr[i - 1] !== p - 1 && <span className="text-silver/30 px-1">…</span>}
                      <button
                        onClick={() => setPage(p)}
                        className={`w-9 h-9 text-sm rounded-lg border transition-all ${
                          page === p
                            ? 'bg-electric-blue border-electric-blue text-white'
                            : 'border-white/10 text-silver/60 hover:border-electric-blue hover:text-white'
                        }`}
                      >
                        {p}
                      </button>
                    </span>
                  ))}
                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="px-4 py-2 text-sm rounded-lg border border-white/10 text-silver/60 hover:text-white hover:border-electric-blue disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
