import React from 'react';
import { JobListing } from '../types';
import { MapPin, Briefcase, Euro, Clock } from 'lucide-react';

interface JobCardProps {
  job: JobListing;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  // Schema.org structured data for SEO (invisible to user, parsed by crawlers)
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "identifier": {
      "@type": "PropertyValue",
      "name": job.employer,
      "value": job.id
    },
    "datePosted": job.postedDate,
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.employer
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.location
      }
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group relative">
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-rose-600 transition-colors">
            {job.title}
          </h3>
          <p className="text-gray-600 font-medium mt-1">{job.employer}</p>
        </div>
        <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
          {job.type}
        </span>
      </div>
      
      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          {job.location}
        </div>
        <div className="flex items-center gap-1">
          <Euro className="h-4 w-4" />
          {job.salary}
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          {job.postedDate}
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {job.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {job.tags.map(tag => (
          <span key={tag} className="text-xs px-2 py-1 bg-rose-50 text-rose-600 rounded">
            {tag}
          </span>
        ))}
      </div>

      <button className="w-full mt-auto py-2 border border-gray-300 rounded-md text-sm font-semibold text-gray-700 hover:border-gray-900 hover:text-gray-900 transition-colors">
        Details ansehen
      </button>
    </div>
  );
};