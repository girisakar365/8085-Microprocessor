import { motion } from "framer-motion";
import { Dot, Download } from "lucide-react";
import { Button } from "./ui/button";

const platforms = [
  {
    name: "Windows",
    icon: "/window.png",
    version: "v1.1.0",
    size: "37 MB",
    link: "https://github.com/girisakar365/8085-Microprocessor/releases/download/cli-v1.1.0/8085-simulator.exe",
  },
  {
    name: "Linux",
    icon: "/linux.png",
    version: "v1.1.0",
    size: "66 MB",
    link: "https://github.com/girisakar365/8085-Microprocessor/releases/download/cli-v1.1.0/8085-simulator-linux",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Downloads = () => {
  return (
    <section
      id="download"
      className="relative py-28 sm:py-32 md:py-36 overflow-hidden w-full"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.1),transparent_60%)]" />

      <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20 md:mb-24"
        >
          <span className="text-primary font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 block">
            Download
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Get <span className="gradient-text">8085 Microprocessor</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto">
            Available for all major platforms. Download now and start coding
            instantly.
          </p>
        </motion.div>

        {/* Platform Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 w-full max-w-4xl mx-auto justify-items-center"
        >
          {platforms.map((platform) => (
            <motion.div
              key={platform.name}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group w-full max-w-sm"
            >
              <div className="glass-card p-8 h-full flex flex-col items-center text-center transition-all duration-300 hover:border-primary/40">
                <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-primary to-accent flex items-center justify-center mb-6">
                  <img
                    src={platform.icon}
                    alt={`${platform.name} icon`}
                    className="w-8 h-8 sm:w-10 sm:h-10 text-primary object-contain bg-transparent filter brightness-50 contrast-325 saturate-0"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {platform.name}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground mb-6">
                  {platform.version} • {platform.size}
                </p>

                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover-glow"
                >
                  <a href={platform.link} download>
                    <Download className="w-5 h-5 mr-2" />
                    Download
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer / Release Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-sm text-muted-foreground">
            Current Version:{" "}
            <span className="text-foreground font-medium">1.1.0</span>{" "}
            <Dot style={{ display: "inline" }} />
            Released December 2025
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Also available on the{" "}
            <a
              href="https://github.com/girisakar365/8085-Microprocessor/releases"
              className="text-primary underline"
            >
              GitHub Releases page
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
