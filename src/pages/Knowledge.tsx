import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Eye, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import SEO from '../components/SEO';
import { breadcrumbSchema } from '../utils/seoSchemas';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image_url: string;
  author: string;
  published_at: string;
  views: number;
}

export default function Knowledge() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Construction Tips', 'Material Guide', 'Steel Calculation', 'Industry News'];

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  }

  const mockPosts = [
    {
      id: '1',
      title: 'TMT Bar Grade Selection Guide for Your Construction Project',
      slug: 'tmt-bar-grade-selection-guide',
      excerpt: 'Understand the differences between Fe 415, Fe 500, and Fe 550 grades and which one is right for your building type.',
      category: 'Material Guide',
      image_url: 'linear-gradient(135deg, #C89B3C 0%, #A0833C 100%)',
      author: 'Super Steels Team',
      published_at: '2024-02-10',
      views: 1250,
    },
    {
      id: '2',
      title: 'How to Calculate Steel Quantity for Your House Construction',
      slug: 'calculate-steel-quantity-house-construction',
      excerpt: 'Step-by-step guide to estimating TMT bar requirements for residential buildings to avoid over-ordering or material shortages.',
      category: 'Steel Calculation',
      image_url: 'linear-gradient(135deg, #6B6F74 0%, #111111 100%)',
      author: 'Structural Engineer',
      published_at: '2024-02-05',
      views: 2100,
    },
    {
      id: '3',
      title: '5 Ways to Optimize Steel Costs Without Compromising Quality',
      slug: 'optimize-steel-costs-without-compromising-quality',
      excerpt: 'Proven strategies for contractors to reduce material expenses while maintaining structural integrity and safety standards.',
      category: 'Construction Tips',
      image_url: 'linear-gradient(135deg, #111111 0%, #6B6F74 100%)',
      author: 'Cost Consultant',
      published_at: '2024-01-28',
      views: 890,
    },
    {
      id: '4',
      title: 'Understanding ISI Certification: Why It Matters for Your Project',
      slug: 'understanding-isi-certification',
      excerpt: 'Everything you need to know about ISI marks, mill test certificates, and why certified steel is non-negotiable.',
      category: 'Material Guide',
      image_url: 'linear-gradient(135deg, #C89B3C 0%, #6B6F74 100%)',
      author: 'Quality Expert',
      published_at: '2024-01-20',
      views: 1560,
    },
    {
      id: '5',
      title: 'Structural Steel vs TMT Bars: When to Use What',
      slug: 'structural-steel-vs-tmt-bars',
      excerpt: 'Detailed comparison of structural steel and TMT bars with use case recommendations for different construction scenarios.',
      category: 'Material Guide',
      image_url: 'linear-gradient(135deg, #6B6F74 0%, #C89B3C 100%)',
      author: 'Structural Engineer',
      published_at: '2024-01-15',
      views: 1780,
    },
    {
      id: '6',
      title: 'Common Material Procurement Mistakes That Cost Contractors Money',
      slug: 'material-procurement-mistakes-contractors',
      excerpt: 'Avoid these critical errors in steel procurement that lead to delays, wastage, and budget overruns.',
      category: 'Construction Tips',
      image_url: 'linear-gradient(135deg, #111111 0%, #C89B3C 100%)',
      author: 'Project Manager',
      published_at: '2024-01-08',
      views: 1120,
    },
  ];

  const displayPosts = posts.length > 0 ? posts : mockPosts;
  const filteredPosts = selectedCategory === 'All'
    ? displayPosts
    : displayPosts.filter(p => p.category === selectedCategory);

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Knowledge', url: '/knowledge' }
  ]);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Super Steels Knowledge Center",
    "description": "Expert insights on steel, construction, and material management",
    "url": "https://supersteels.com/knowledge"
  };

  return (
    <>
      <SEO
        title="Steel & Construction Knowledge Center | Expert Tips & Guides - Super Steels"
        description="Expert insights on TMT bars, steel calculation, construction tips, and material management. Learn about ISI certification, steel grades, and industry best practices."
        keywords="TMT bar guide, steel calculation, construction tips, ISI certification, steel grades, material procurement"
        canonical="/knowledge"
        schemaMarkup={[breadcrumbs, blogSchema]}
      />
      <div className="pt-32">
      <section className="py-20 bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#111111]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
              Knowledge <span className="text-ss-gold">Center</span>
            </h1>
            <p className="text-lg md:text-xl text-[#F4F5F7] leading-relaxed">
              Expert insights on steel, construction, and material management
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-[#F4F5F7] border-b-2 border-ss-gold">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-bold uppercase text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-ss-gold text-ss-navy'
                    : 'bg-white text-[#111111] hover:bg-ss-gold hover:text-ss-navy'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F4F5F7]">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-ss-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white overflow-hidden hover:shadow-2xl transition-all group cursor-pointer"
                >
                  <div
                    className="h-48 relative overflow-hidden"
                    style={{ background: post.image_url }}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute top-4 left-4 bg-ss-gold text-ss-navy px-3 py-1 text-xs font-bold uppercase">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-bold text-[#111111] mb-3 uppercase tracking-tight leading-tight group-hover:text-ss-gold transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-[#6B6F74] mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-[#6B6F74] mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#F4F5F7]">
                      <div className="flex items-center gap-1 text-xs text-[#6B6F74]">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      </div>
                      <button className="inline-flex items-center gap-2 text-ss-gold font-bold uppercase text-xs hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
              Have a <span className="text-ss-gold">Question?</span>
            </h2>
            <p className="text-lg text-[#F4F5F7] mb-8 leading-relaxed">
              Our team can provide expert guidance on material selection and construction planning
            </p>
            <a
              href="tel:+918242123456"
              className="inline-flex items-center justify-center gap-2 bg-ss-gold text-ss-navy px-8 py-4 font-bold uppercase text-sm hover:bg-ss-gold-light transition-colors"
            >
              Call Our Experts
            </a>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
}
