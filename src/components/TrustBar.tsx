import { motion } from "framer-motion";
import acmeLogo from "@/assets/logos/acme-corp.png";
import techflowLogo from "@/assets/logos/techflow.png";
import streamlineLogo from "@/assets/logos/streamline.png";
import novapayLogo from "@/assets/logos/novapay.png";
import datasyncLogo from "@/assets/logos/datasync.png";
import cloudpeakLogo from "@/assets/logos/cloudpeak.png";

const clients = [
  { name: "Acme Corp", logo: acmeLogo },
  { name: "TechFlow", logo: techflowLogo },
  { name: "Streamline", logo: streamlineLogo },
  { name: "NovaPay", logo: novapayLogo },
  { name: "DataSync", logo: datasyncLogo },
  { name: "CloudPeak", logo: cloudpeakLogo },
];

const TrustBar = () => {
  return (
    <section className="py-10 border-b border-border/20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Trusted by forward-thinking teams
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-10 md:h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
