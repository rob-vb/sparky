import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { mockIdeas } from '@/lib/mock-data';

export const metadata = {
  title: 'Admin | Sparky',
};

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Admin Review</h1>
        <Badge variant="secondary">Authentication coming soon</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Ideas Queue</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">#</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="w-32">Status</TableHead>
                <TableHead className="w-32">Published</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockIdeas.map((idea) => (
                <TableRow key={idea.id}>
                  <TableCell className="font-mono">
                    {String(idea.ideaNumber).padStart(3, '0')}
                  </TableCell>
                  <TableCell className="font-medium">{idea.title}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-green-500">
                      Published
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {new Date(idea.publishedAt).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
