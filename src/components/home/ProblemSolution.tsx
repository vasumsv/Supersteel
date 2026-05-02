import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Clock, Shield, Scale, Zap, Minus } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    {
      icon: Clock,
      title: 'Material Delays',
      description: 'Construction stops when steel does not arrive on time, costing you money and reputation.',
    },
    {
      icon: Scale,
      title: 'Inaccurate Weight',
      description: 'Short-weight supply forces you to reorder, disrupting project schedules and budgets.',
    },
    {
      icon: AlertTriangle,
      title: 'Quality Concerns',
      description: 'Substandard steel compromises structural integrity and creates legal liabilities.',
    },
  ];

  const solutions = [
    {
      icon: Zap,
      title: 'Same Day Loading',
      description: 'Urgent requirement? We prioritize bulk orders with immediate loading and dispatch.',
    },
    {
      icon: Scale,
      title: 'Accurate Weight Guarantee',
      description: 'Every shipment is weighed precisely. You get exactly what you pay for, every time.',
    },
    {
      icon: Shield,
      title: 'Certified Quality Steel',
      description: 'Direct mill procurement ensures ISI-marked, grade-certified steel for structural safety.',
    },
    {
      icon: CheckCircle,
      title: 'Bulk Order Priority',
      description: 'Large projects get dedicated attention with phase-wise scheduling and timely delivery.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bebas text-[#111111] mb-3 uppercase tracking-wide leading-[0.95]">
              The Problem with<br />
              <span className="text-ss-gold">Unreliable Supply</span>
            </h2>
            <p className="text-sm text-[#6B6F74] mb-6 font-inter font-medium">
              Material delay stops construction. We understand what's at stake when steel doesn't arrive.
            </p>

            <div className="space-y-3">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
                  className="flex gap-3 p-4 metallic-grey panel-inset border-l-2 border-ss-gold"
                >
                  <problem.icon className="w-6 h-6 text-ss-gold flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <div>
                    <h3 className="spec-label text-[#111111] mb-1.5">
                      {problem.title}
                    </h3>
                    <p className="text-xs text-[#6B6F74] leading-tight font-inter font-medium">{problem.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bebas text-[#111111] mb-3 uppercase tracking-wide leading-[0.95]">
              How Super Steels<br />
              <span className="text-ss-gold">Prevents Work Stoppage</span>
            </h2>
            <p className="text-sm text-[#6B6F74] mb-6 font-inter font-medium">
              Two decades of experience ensuring your construction never waits for material.
            </p>

            <div className="space-y-3">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
                  className="flex gap-3 p-4 bg-white panel-inset border-l-2 border-ss-gold-light hover:border-ss-gold transition-colors"
                >
                  <solution.icon className="w-6 h-6 text-ss-gold flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <div>
                    <h3 className="spec-label text-[#111111] mb-1.5">
                      {solution.title}
                    </h3>
                    <p className="text-xs text-[#6B6F74] leading-tight font-inter font-medium">{solution.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
