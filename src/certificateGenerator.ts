/**
 * Certificate Generator Utility
 * Generates downloadable PDF certificates for quiz completion
 */

export interface CertificateData {
  participantName: string;
  score: number;
  totalQuestions: number;
  completionDate: Date;
  certificateId: string;
}

/**
 * Generate a unique certificate ID
 */
export const generateCertificateId = (): string => {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return `ZTG-${timestamp}-${random}`.toUpperCase();
};

/**
 * Format date to readable string
 */
export const formatCertificateDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

/**
 * Download certificate as image (using canvas)
 */
export const downloadCertificateAsImage = (data: CertificateData): void => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    console.error('Could not get canvas context');
    return;
  }

  // Set canvas dimensions (standard certificate: 1200x800px at 96 DPI)
  canvas.width = 1200;
  canvas.height = 800;

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, '#f5f5f5');
  gradient.addColorStop(1, '#e8e8e8');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Border
  ctx.strokeStyle = '#1a7f7e';
  ctx.lineWidth = 8;
  ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

  // Inner decorative border
  ctx.strokeStyle = '#ffa500';
  ctx.lineWidth = 3;
  ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);

  // Logo/Header area
  ctx.fillStyle = '#1a7f7e';
  ctx.fillRect(0, 0, canvas.width, 120);

  // Title
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 48px Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('CERTIFICATE OF COMPLETION', canvas.width / 2, 70);

  // Subtitle
  ctx.font = '20px Arial, sans-serif';
  ctx.fillStyle = '#ffa500';
  ctx.fillText('Zitruckgo Defense Driving Training', canvas.width / 2, 105);

  // Main content area
  ctx.fillStyle = '#000000';

  // "This is to certify that" text
  ctx.font = '18px Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('This is to certify that', canvas.width / 2, 180);

  // Participant name (larger, bold)
  ctx.font = 'bold 32px Arial, sans-serif';
  ctx.fillStyle = '#1a7f7e';
  ctx.fillText(data.participantName, canvas.width / 2, 240);

  // Underline for name
  ctx.strokeStyle = '#1a7f7e';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 - 200, 255);
  ctx.lineTo(canvas.width / 2 + 200, 255);
  ctx.stroke();

  // Achievement text
  ctx.fillStyle = '#000000';
  ctx.font = '16px Arial, sans-serif';
  ctx.fillText('has successfully completed the', canvas.width / 2, 310);

  ctx.font = 'bold 18px Arial, sans-serif';
  ctx.fillStyle = '#1a7f7e';
  ctx.fillText('Zitruckgo Defense Driving Training Program', canvas.width / 2, 345);

  // Score information
  ctx.fillStyle = '#000000';
  ctx.font = '14px Arial, sans-serif';
  ctx.fillText(`with a passing score of ${data.score}% on the knowledge assessment`, canvas.width / 2, 390);

  // Achievement details box
  ctx.fillStyle = '#f0f0f0';
  ctx.fillRect(200, 420, canvas.width - 400, 120);

  ctx.strokeStyle = '#1a7f7e';
  ctx.lineWidth = 2;
  ctx.strokeRect(200, 420, canvas.width - 400, 120);

  ctx.fillStyle = '#1a7f7e';
  ctx.font = 'bold 14px Arial, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('Achievement Details:', 230, 450);

  ctx.fillStyle = '#000000';
  ctx.font = '13px Arial, sans-serif';
  ctx.fillText(`• Score: ${data.score}% (${data.score >= 80 ? 'Passed' : 'Not Passed'})`, 230, 480);
  ctx.fillText(`• Questions Answered: ${data.totalQuestions}`, 230, 510);
  ctx.fillText(`• Completion Date: ${formatCertificateDate(data.completionDate)}`, 230, 540);

  // Signature area
  ctx.textAlign = 'center';
  ctx.fillStyle = '#000000';
  ctx.font = '14px Arial, sans-serif';
  ctx.fillText('Authorized by', canvas.width / 2, 620);

  ctx.font = 'bold 16px Arial, sans-serif';
  ctx.fillText('Zitruckgo Training Department', canvas.width / 2, 650);

  // Certificate ID and date at bottom
  ctx.font = '11px Arial, sans-serif';
  ctx.fillStyle = '#666666';
  ctx.textAlign = 'left';
  ctx.fillText(`Certificate ID: ${data.certificateId}`, 60, 750);
  ctx.textAlign = 'right';
  ctx.fillText(`Issued: ${formatCertificateDate(data.completionDate)}`, canvas.width - 60, 750);

  // Convert canvas to blob and download
  canvas.toBlob((blob) => {
    if (!blob) {
      console.error('Could not create blob from canvas');
      return;
    }

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Zitruckgo_Certificate_${data.certificateId}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
};

/**
 * Share certificate on social media or email
 */
export const shareCertificate = (data: CertificateData, platform: 'email' | 'linkedin' | 'twitter'): void => {
  const message = `I just completed the Zitruckgo Defense Driving Training Program with a score of ${data.score}%! 🚛 #DefensiveDriving #TruckSafety #Zitruckgo`;

  switch (platform) {
    case 'email':
      window.location.href = `mailto:?subject=Zitruckgo Defense Driving Training Certificate&body=${encodeURIComponent(message)}`;
      break;
    case 'linkedin':
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
        '_blank'
      );
      break;
    case 'twitter':
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`,
        '_blank'
      );
      break;
  }
};
