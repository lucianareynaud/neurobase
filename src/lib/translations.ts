export type Locale = 'pt' | 'en';

export const locales: Locale[] = ['pt', 'en'];
export const defaultLocale: Locale = 'pt';

export const translations = {
  pt: {
    // Navigation
    nav: {
      home: 'Início',
      blog: 'Blog',
      products: 'Produtos',
      about: 'Sobre Mim',
      consultation: 'Consultoria',
      contact: 'Contato',
      scheduleConsultation: 'Agende Consultoria',
      language: 'English'
    },
    // Home page
    home: {
      title: 'Desenvolvimento Neurológico Respeitoso para Bebês 0-2 Anos',
      subtitle: 'Metodologia científica baseada em Emmi Pikler e Magda Gerber',
      cta1: 'Conheça Nossa Abordagem',
      cta2: 'Agende Consultoria',
      credibility: {
        experience: '10 anos de experiência, 7 nos EUA',
        education: 'Formação no Vale do Silício',
        methodology: 'Metodologias cientificamente comprovadas'
      }
    },
    // Blog
    blog: {
      title: 'Blog',
      subtitle: 'Artigos sobre desenvolvimento neurológico respeitoso para bebês 0-2 anos, baseados nas metodologias de Emmi Pikler e Magda Gerber.',
      readMore: 'Ler artigo completo',
      categories: 'Categorias',
      newsletter: {
        title: 'Receba Novos Artigos',
        description: 'Cadastre-se para receber os novos artigos sobre desenvolvimento infantil respeitoso',
        placeholder: 'Seu e-mail',
        button: 'Cadastrar'
      },
      categoriesList: {
        pikler: {
          title: 'Emmi Pikler',
          description: 'Fundamentos da metodologia Pikler'
        },
        gerber: {
          title: 'Magda Gerber',
          description: 'Abordagem RIE e cuidados respeitosos'
        },
        neuroscience: {
          title: 'Neurociência',
          description: 'Desenvolvimento neurológico 0-2 anos'
        }
      }
    },
    // Blog post
    blogPost: {
      backToBlog: '← Voltar ao Blog',
      readTime: 'min de leitura',
      wantToLearnMore: 'Quer Aprender Mais?',
      consultationDescription: 'Agende uma consultoria personalizada para entender como aplicar os princípios de Pikler no desenvolvimento do seu bebê.',
      scheduleConsultation: 'Agendar Consultoria'
    },
    // Footer
    footer: {
      copyright: 'Todos os direitos reservados.',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Uso'
    }
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      blog: 'Blog',
      products: 'Products',
      about: 'About Me',
      consultation: 'Consultation',
      contact: 'Contact',
      scheduleConsultation: 'Schedule Consultation',
      language: 'Português'
    },
    // Home page
    home: {
      title: 'Respectful Neurological Development for Babies 0-2 Years',
      subtitle: 'Scientific methodology based on Emmi Pikler and Magda Gerber',
      cta1: 'Learn About Our Approach',
      cta2: 'Schedule Consultation',
      credibility: {
        experience: '10 years of experience, 7 in the USA',
        education: 'Education in Silicon Valley',
        methodology: 'Scientifically proven methodologies'
      }
    },
    // Blog
    blog: {
      title: 'Blog',
      subtitle: 'Articles about respectful neurological development for babies 0-2 years, based on Emmi Pikler and Magda Gerber methodologies.',
      readMore: 'Read full article',
      categories: 'Categories',
      newsletter: {
        title: 'Receive New Articles',
        description: 'Subscribe to receive new articles about respectful child development',
        placeholder: 'Your email',
        button: 'Subscribe'
      },
      categoriesList: {
        pikler: {
          title: 'Emmi Pikler',
          description: 'Fundamentals of Pikler methodology'
        },
        gerber: {
          title: 'Magda Gerber',
          description: 'RIE approach and respectful care'
        },
        neuroscience: {
          title: 'Neuroscience',
          description: 'Neurological development 0-2 years'
        }
      }
    },
    // Blog post
    blogPost: {
      backToBlog: '← Back to Blog',
      readTime: 'min read',
      wantToLearnMore: 'Want to Learn More?',
      consultationDescription: 'Schedule a personalized consultation to understand how to apply Pikler principles in your baby\'s development.',
      scheduleConsultation: 'Schedule Consultation'
    },
    // Footer
    footer: {
      copyright: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use'
    }
  }
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
