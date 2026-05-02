import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Box } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Project {
  id: string;
  title: string;
  project_type: string;
  location: string;
  material_supplied: string;
  description: string;
  image_url: string;
  completed_date: string;
  is_featured: boolean;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedType, setSelectedType] = useState('All');
  const [loading, setLoading] = useState(true);

  const projectTypes = ['All', 'Residential', 'Commercial', 'Industrial', 'Infrastructure'];

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('completed_date', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  }

  const filteredProjects = selectedType === 'All'
    ? projects
    : projects.filter(p => p.project_type === selectedType);

  const mockProjects = [
    {
      id: '1',
      title: 'Premium Residential Complex',
      project_type: 'Residential',
      location: 'Mangalore City',
      material_supplied: 'TMT Bars, Structural Steel',
      description: '50-unit apartment complex with basement parking',
      image_url: 'linear-gradient(135deg, #C89B3C 0%, #A0833C 100%)',
      completed_date: '2024-01',
      is_featured: true,
    },
    {
      id: '2',
      title: 'Commercial Shopping Center',
      project_type: 'Commercial',
      location: 'Udupi',
      material_supplied: 'ISMB Beams, ISMC Channels, MS Sheets',
      description: 'Three-story shopping complex with modern steel framework',
      image_url: 'linear-gradient(135deg, #6B6F74 0%, #111111 100%)',
      completed_date: '2023-12',
      is_featured: true,
    },
    {
      id: '3',
      title: 'Manufacturing Facility',
      project_type: 'Industrial',
      location: 'Mangalore Industrial Area',
      material_supplied: 'Structural Steel, GI Sheets, MS Pipes',
      description: '20,000 sq ft industrial shed with mezzanine floor',
      image_url: 'linear-gradient(135deg, #111111 0%, #6B6F74 100%)',
      completed_date: '2023-11',
      is_featured: false,
    },
    {
      id: '4',
      title: 'Highway Bridge Construction',
      project_type: 'Infrastructure',
      location: 'Uttara Kannada',
      material_supplied: 'TMT Bars, ISMB Beams, Structural Steel',
      description: 'Single-span bridge construction over river',
      image_url: 'linear-gradient(135deg, #C89B3C 0%, #6B6F74 100%)',
      completed_date: '2023-10',
      is_featured: true,
    },
    {
      id: '5',
      title: 'Luxury Villa Project',
      project_type: 'Residential',
      location: 'Surathkal',
      material_supplied: 'TMT Bars, MS Sheets, Chequered Plates',
      description: 'High-end villa with custom steel staircase',
      image_url: 'linear-gradient(135deg, #6B6F74 0%, #C89B3C 100%)',
      completed_date: '2023-09',
      is_featured: false,
    },
    {
      id: '6',
      title: 'Corporate Office Building',
      project_type: 'Commercial',
      location: 'Mangalore',
      material_supplied: 'Complete steel framework, GI false ceiling',
      description: 'Six-story office building with steel and glass facade',
      image_url: 'linear-gradient(135deg, #111111 0%, #C89B3C 100%)',
      completed_date: '2023-08',
      is_featured: false,
    },
  ];

  const displayProjects = projects.length > 0 ? filteredProjects : mockProjects.filter(p =>
    selectedType === 'All' || p.project_type === selectedType
  );

  return (
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
              Projects We've <span className="text-ss-gold">Built</span>
            </h1>
            <p className="text-lg md:text-xl text-[#F4F5F7] leading-relaxed">
              A showcase of structures strengthened by our reliable steel supply
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-[#F4F5F7] border-b-2 border-ss-gold">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {projectTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-3 font-bold uppercase text-sm transition-all ${
                  selectedType === type
                    ? 'bg-ss-gold text-ss-navy'
                    : 'bg-white text-[#111111] hover:bg-ss-gold hover:text-ss-navy'
                }`}
              >
                {type}
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
              {displayProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white overflow-hidden hover:shadow-2xl transition-all group"
                >
                  <div
                    className="h-48 relative overflow-hidden"
                    style={{ background: project.image_url }}
                  >
                    {project.is_featured && (
                      <div className="absolute top-4 left-4 bg-ss-gold text-ss-navy px-3 py-1 text-xs font-bold uppercase">
                        Featured
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#111111] mb-3 uppercase tracking-tight">
                      {project.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-[#6B6F74]">
                        <MapPin className="w-4 h-4 text-ss-gold" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#6B6F74]">
                        <Box className="w-4 h-4 text-ss-gold" />
                        <span>{project.material_supplied}</span>
                      </div>
                      {project.description && (
                        <p className="text-sm text-[#6B6F74] leading-relaxed mt-3">
                          {project.description}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-[#F4F5F7]">
                      <span className="inline-block px-3 py-1 bg-ss-gold text-ss-navy text-xs font-bold uppercase">
                        {project.project_type}
                      </span>
                    </div>
                  </div>
                </motion.div>
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
              Your Project is <span className="text-ss-gold">Next</span>
            </h2>
            <p className="text-lg text-[#F4F5F7] mb-8 leading-relaxed">
              Join thousands of satisfied contractors who trust Super Steels for their material supply
            </p>
            <a
              href="tel:+918242123456"
              className="inline-flex items-center justify-center gap-2 bg-ss-gold text-ss-navy px-8 py-4 font-bold uppercase text-sm hover:bg-ss-gold-light transition-colors"
            >
              Call +91-824-2123456
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
