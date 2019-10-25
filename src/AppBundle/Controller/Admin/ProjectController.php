<?php
namespace AppBundle\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

use AppBundle\Entity\Project;

class ProjectController extends Controller
{
    /**
     *@Route ("/admin/projects",name="admin_projects") 
     */
    public function indexAction(Request $request)
    {
        $this->denyAccessUnlessGranted(["ROLE_ADMIN"]);
        $projectRepository = $this->getDoctrine()->getRepository(Project::class);

        $projects = $projectRepository->findAll();
        dump($projects);die;

        return $this->render('admin/projects/index.html.twig', [
        ]);

    }

}