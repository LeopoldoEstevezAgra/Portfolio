<?php
namespace AppBundle\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

use AppBundle\Entity\Project;

/**
 *@Route ("/admin/projects") 
*/

class ProjectController extends Controller
{
    /**
     *@Route ("/",name="admin_projects") 
     */
    public function indexAction(Request $request)
    {
        $this->denyAccessUnlessGranted(["ROLE_ADMIN"]);
        $projectRepository = $this->getDoctrine()->getRepository(Project::class);

        $projects = $projectRepository->findAll();

        return $this->render('admin/projects/index.html.twig', [
            "projects" => $projects
        ]);
    }
}